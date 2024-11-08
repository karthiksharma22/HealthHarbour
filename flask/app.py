from flask import Flask , render_template , request , jsonify
import requests
from flask_cors import CORS
import pyttsx3
import spacy
from spacy.lang.en.stop_words import STOP_WORDS

import os
import PyPDF2
app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

summary = ''

def analyse(pdf_path):
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += page.extract_text()
    except Exception as e:
        print(f"Error extracting text: {e}")
    return text

def generate_summary(text):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text)

    # Filter out stop words
    filtered_tokens = [token.text for token in doc if token.text.lower() not in STOP_WORDS]

    # Create a summary by selecting the most relevant sentences
    sentences = [sent.text.strip() for sent in doc.sents]
    summary = " ".join(sentences[:5])  # Select the first 5 sentences as a summary

    return summary

def speak_text(text):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150) 
    engine.say(text)
    engine.runAndWait()


@app.route('/pdf',methods=[ 'POST'])
def handlepdf():
    if 'pdfFile' not in request.files:
        return 'No file part', 400

    pdf_file = request.files['pdfFile']

    if pdf_file.filename == '':
        return 'No selected file', 400
    
    pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], pdf_file.filename)
    pdf_file.save(pdf_path)

    

    extracted_text = analyse(pdf_path)
    summary = generate_summary(extracted_text)
  
    print(summary)
    return jsonify({'text': summary}), 200
    

@app.route('/speak/<text>')
def speak(text):
    
    speak_text(text)
    return 'success'



    





    
    

    

if(__name__ == "__main__"):
    app.run(debug=True)