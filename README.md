# Health Harbour

Health Harbour is a comprehensive real-time hospital management application designed to streamline hospital operations and enhance patient care. It offers a wide range of features including doctor appointment booking, email updates, report analysis, and an intuitive dashboard to facilitate smooth interactions between patients and doctors.

## Features

- **Doctor Appointment Booking**: Patients can easily schedule appointments with doctors, ensuring quick access to medical consultations.
- **Email Updates**: Automatic email notifications for appointment reminders and updates.
- **Report Analysis**: Integration for analyzing and visualizing patient reports, assisting doctors with decision-making.
- **Intuitive Dashboard**: A user-friendly dashboard for both patients and healthcare providers to track appointments, reports, and more.
- **Patient Document Analysis**: Flask (Python)

## Technologies Used

- **Frontend**: ReactJS, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Email Notifications**: NodeMailer
- **Data Visualization**: Chart.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/health-harbour.git
Here’s the full installation process formatted in the correct GitHub README style:

2. Navigate to the project directory:
   ```bash
   cd health-harbour
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

5. Create a `.env` file in the root of the `server` folder and add your environment variables, such as:
   ```env
   MONGO_URI=your_mongo_connection_string
   NODE_ENV=development
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

6. Start the application:

   - To start the backend (server):
     ```bash
     cd ../server
     npm start
     ```

   - To start the frontend (client):
     ```bash
     cd ../client
     npm start
     ```

7. Visit `http://localhost:3000` in your browser to access the application.
