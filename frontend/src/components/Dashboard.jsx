import React, { useState } from "react";
import pdfToText from 'react-pdftotext';

import '../css/dashboard.css'
import axios from "axios";
export default function Dashbard(){
    const [jobTitles, setJobtitle] = useState("");
    const [jobDescription, setJobdescription] = useState("");
    const [extracted, setExtract] = useState("");
    const [yoe, setYoe] = useState("");
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [array, setarray] = useState([]);

    const handlePDF = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        pdfToText(selectedFile)
            .then((text) => {
            setExtract(text);
            console.log("Extracted text:", text);
            })
            .catch((error) => console.error("Failed to retrieve text:", error));
        console.log(extracted);
    };

    // const extract = (event) => {
    //     if(file){
    //         pdfToText(file).then(text=>{
    //             setExtract(text);
    //             console.log(text);
    //         }).catch(error=> console.log("Failed to retrive the text from the pdf"))
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        console.log("Job Title:", jobTitles);
        console.log("Job Description:", jobDescription);
        console.log("Years of Experience:", yoe);
    };
    // const sendFull=()=>{
// 
    // }

    const sendBackend=async()=>{
        if(!file){
            alert("please upload a file");
            return
        }
        const formData = {};
        formData["Titles"]=jobTitles;
        formData["Description"]=jobDescription;
        formData["Expericence"]=yoe;
        formData["Extracted"]=extracted;

        const res = await axios.post('http://localhost:5000/api/upload', formData );
            
        setData(res.data);
        console.log(res.data);
        // array.push(res.data);
         setarray(prev => [...prev, res.data]);

    }


    
    return(
        <>
        <div className="container">

            <div className="input-section">
                <form onSubmit={handleSubmit}>
                    <label>Job Title</label>
                    <label>{jobTitles}</label>
                    <input type="text" onChange={(e) => setJobtitle(e.target.value)}/>

                    <label>Job Description</label>
                    <label>{jobDescription}</label>
                    <input type="text" onChange={(e)=>setJobdescription(e.target.value)}/>

                    <label>Year of Experience</label>
                    <label>{yoe}</label>
                    <input type="text" onChange={(e)=>setYoe(e.target.value)} />

                    <label>Upload pdf</label>
                    {/* <label></label> */}
                    <input type="file" accept=".pdf" onChange={handlePDF}/>
                    <button type="submit" onClick={sendBackend}>submit</button>
                    {/* {data} */}
                </form>

            {array.length > 0 && (
          <div className="response-section">
            <h3>AI Result:</h3>
            {array.map((d, index) => (
              <div key={index}>
                <p><strong>Score:</strong> {d.score}</p>
                <p><strong>Strength:</strong> {d.Strength.length>0?d.Strength.join(", "):"None"}</p>
                <p><strong>Missing Keywords:</strong> {
                (d.Missing_keywords.length) >0?
                d.Missing_keywords.join(", "):("None")}</p>
                <p><strong>Suggestions:</strong> {d.Suggestions.lenght>0?d.Suggestions.join("\n"):"None"}</p>
                <hr />
              </div>
            ))}
            </div>
           ) }
                   
                </div>




            </div>




            
        </>
    )
}