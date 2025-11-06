import React, { useState } from "react";
import pdfToText from 'react-pdftotext';

// import '../css/dashboard.css'
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
        <div className="container min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

            <div className="input-section max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                        <label className="block text-xs text-gray-500 mb-2">{jobTitles}</label>
                        <input 
                            type="text" 
                            onChange={(e) => setJobtitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                        <label className="block text-xs text-gray-500 mb-2">{jobDescription}</label>
                        <input 
                            type="text" 
                            onChange={(e)=>setJobdescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year of Experience</label>
                        <label className="block text-xs text-gray-500 mb-2">{yoe}</label>
                        <input 
                            type="text" 
                            onChange={(e)=>setYoe(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF</label>
                        <input 
                            type="file" 
                            accept=".pdf" 
                            onChange={handlePDF}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button 
                        type="submit" 
                        onClick={sendBackend}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                    >
                        Submit
                    </button>
                </form>

                {array.length > 0 && (
                    <div className="response-section mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Result:</h3>
                        {array.map((d, index) => (
                            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="mb-2"><strong className="text-gray-700">Score:</strong> <span className="font-medium">{d.score}</span></p>
                                <p className="mb-2"><strong className="text-gray-700">Strength:</strong> <span className="text-green-600">{d.Strength.length > 0 ? d.Strength.join(", ") : "None"}</span></p>
                                <p className="mb-2"><strong className="text-gray-700">Missing Keywords:</strong> <span className="text-red-600">{(d.Missing_keywords.length) > 0 ? d.Missing_keywords.join(", ") : "None"}</span></p>
                                <p className="mb-2"><strong className="text-gray-700">Suggestions:</strong> <span className="text-blue-600">{d.Suggestions.lenght > 0 ? d.Suggestions.join("\n") : "None"}</span></p>
                                <hr className="mt-4 border-gray-300" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}