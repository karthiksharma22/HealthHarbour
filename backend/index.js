const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const Patients = require("./schemas/Patient");

const mongoUri = "YOUR_API_KEY";
mongoose.connect(mongoUri);

const Doctor = require("./schemas/Doctor");

const port = 5000;
const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "EMAIL",
    pass: "EMAIL PASSWORD",
  },
});

//using middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("frontend"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/fecthdoctordetails", async (req, res) => {
  try {
    const doctor = await Doctor.find();
    const doctor_categories = {
      cardiac: [],
      gyno: [],
      feet: [],
      heart: [],
      nurse: [],
    };
    doctor.forEach((ele) => {
      doctor_categories[ele.category].push(ele);
    });

    res.json({ doctor_categories });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

app.post("/adddoctor", async (req, res) => {
  try {
    const {
      name,
      age,
      experience,
      category,
      mail,
      img,
      qualifications,
      patients,
    } = req.body;
    let doctor = await Doctor.findOne({ mail: mail });

    if (doctor) {
      res.status(400).json({ msg: "User already exists" });
    } else {
      doctor = new Doctor({
        name,
        age,
        experience,
        category,
        mail,
        img,
        qualifications,
        patients,
      });
      await doctor.save();
      res.status(200).json({ msg: doctor });
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/send-email/:docid", async (req, res) => {
  const username = req.body.username;
  const datetime = req.body.datetime;
  const docname = req.body.docname;
  const pemail = req.body.pemail;
  const demail = req.body.demail;
  const docid = req.params.docid;

  const mailOptionsdoc = {
    from: "YOUR EMAIL", // Replace with your Gmail email address
    to: pemail, // patient

    subject: "Your Appointment has been acknowledged",
    text: `We are pleased to confirm your upcoming appointment with ${docname}. Your health and well-being are our top priorities, and we look forward to providing you with exceptional care.

    Appointment Details:
    - Date: ${datetime}
    - Location: CMR Hospitals
    - Doctor: ${docname}

    If you have any questions or need to reschedule, please contact the doctor at ${demail}.

    Thank you for choosing CMR Hospitals. We value your trust in us and are committed to ensuring a positive and comfortable experience during your visit.

    Best regards,
    CMR Hospital CEO
    CMR Hospital`,
  };
  const mailOptionspat = {
    from: "YOUR EMAIL", // Replace with your Gmail email address
    to: demail, // docdetails
    subject: `A patient ${username} has scheduled an appointment with our medical practice`,
    text: `Dear ${docname},

    A new appointment has been scheduled by a patient named ${username}. Here are the details:

    Patient: ${username}
    Scheduled Date and Time: ${datetime}
    Email of Patient : ${pemail}

    Please review the details and make the necessary arrangements for the upcoming appointment.

    Thank you,
    CMR Hospitals Pvt Ltd.`,
  };

  const doctor = await Doctor.findOne({ mail: demail });
  doctor.patients += 1;
  await Doctor.findByIdAndUpdate(docid, doctor);

  transporter.sendMail(mailOptionsdoc, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
  });
  transporter.sendMail(mailOptionspat, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
  });

  let patients = await Patients.findOne({ mail: pemail });
  if (!patients) {
    patients = new Patients({
      name: username,
      mail: pemail,
      appointment: [datetime],
      doctor: [docname],
    });
    patients.save();
    console.log(patients);
    res.status(200).json({ patients });
  } else {
    patients.appointment.push(datetime);
    patients.doctor.push(docname);
    const uppat = await Patients.findOneAndReplace({ mail: pemail }, patients, {
      new: true,
      useFindAndModify: false,
    });
    console.log(uppat);

    res.json({ uppat });
  }
});

app.listen(port, () => {
  console.log(`Web Server started at port ${port}`);
});
