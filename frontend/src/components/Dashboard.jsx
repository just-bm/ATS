import React, { useState } from "react";
import '../css/dashboard.css'
export default function Dashbard(){
    const [jobTitles, setJobtitle] = useState("");
    const [jobDescription, setJobdescription] = useState("");
    const [yoe, setYoe] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        console.log("Job Title:", jobTitles);
        console.log("Job Description:", jobDescription);
        console.log("Years of Experience:", yoe);
    };
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

                    <button type="submit">submit</button>

                </form>
            </div>









        </div>
        </>
    )
}