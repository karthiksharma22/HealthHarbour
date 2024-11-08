import React, { useState } from "react";
import "../styles/reports.css";
const Reports = () => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [file, setFile] = useState(null);
  const [text, settext] = useState("");

  const handleAudio = async () => {
    const response = await fetch(`http://127.0.0.1:5000/speak/${text}`);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdfFile", file);

      const response = await fetch("http://127.0.0.1:5000/pdf", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      settext(data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container2">
      <h2>Your Reports Analysis</h2>
      <div className="files">
        <p>Add a file to analyse it</p>
        <input type="file" name="" id="" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload PDF</button>
        <hr
          style={{
            width: "100%",
            backgroundColor: "white",
            border: "1px solid white",
            margin: "40px 0px",
          }}
        />
        {text ? (
          <>
            <h2>Summary</h2>
            <p>
              <pre>{text}</pre>
            </p>
            <button onClick={handleAudio}>Play Audio</button>
          </>
        ) : (
          "Select a File to Analyse it"
        )}
      </div>
    </div>
  );
};

export default Reports;
