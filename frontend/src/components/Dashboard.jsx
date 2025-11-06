import React, { useState } from "react";
import { Upload, FileText, Briefcase, CircleAlert, Calendar, CheckCircle, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import axios from "axios"; 
import pdfToText from 'react-pdftotext'; 
// import { set } from "mongoose";
export default function Dashboard() {
    const [jobTitles, setJobtitle] = useState("");
    const [jobDescription, setJobdescription] = useState("");
    const [extracted, setExtract] = useState("");
    const [yoe, setYoe] = useState("");
    const [file, setFile] = useState(null);
    const [array, setarray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [res, setData] = useState(null);
    // const [res, setRes] = useState();

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

    const sendBackend = async () => {
        if (!file) {
            alert("Please upload a file");
            return;
        }
        
        setIsLoading(true);
        

            try{
            const formData = {};
            formData["Titles"]=jobTitles;
            formData["Description"]=jobDescription;
            formData["Expericence"]=yoe;
            formData["Extracted"]=extracted;
            console.log("form data is \n", formData);

            const res = await axios.post('https://ats-2rss.onrender.com/api/upload', formData );
            
            setData(res.data);
            console.log(res.data);
        // array.push(res.data);
            setarray(prev => [...prev, res.data]);
            }catch(error){
                console.log("error found \n", error);
            }finally{
                setIsLoading(false);
            }
    };

    const getScoreGradient = (score) => {
        if (score >= 80) return "from-green-500 to-emerald-600";
        if (score >= 60) return "from-yellow-500 to-orange-600";
        return "from-red-500 to-rose-600";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Resume Analyzer
                    </h1>
                    <p className="text-gray-600">Optimize your resume for your dream job</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                                    Job Title
                                </label>
                                <input 
                                    type="text" 
                                    onChange={(e) => setJobtitle(e.target.value)}
                                    placeholder="e.g., Senior Software Engineer"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                    Years of Experience
                                </label>
                                <input 
                                    type="text" 
                                    onChange={(e) => setYoe(e.target.value)}
                                    placeholder="e.g., 5 years"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-semibold text-gray-700">
                                <FileText className="w-4 h-4 mr-2 text-blue-600" />
                                Job Description
                            </label>
                            <textarea 
                                onChange={(e) => setJobdescription(e.target.value)}
                                placeholder="Paste the job description here..."
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-semibold text-gray-700">
                                <Upload className="w-4 h-4 mr-2 text-blue-600" />
                                Upload Resume (PDF)
                            </label>
                            <div className="relative">
                                <input 
                                    type="file" 
                                    accept=".pdf" 
                                    onChange={handlePDF}
                                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer hover:border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                            {file && (
                                <p className="text-sm text-green-600 flex items-center mt-2">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    {file.name} uploaded successfully
                                </p>
                            )}
                        </div>

                        <button 
                            type="button" 
                            onClick={sendBackend}
                            disabled={isLoading}
                            className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <TrendingUp className="w-5 h-5 mr-2" />
                                    Analyze Resume
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {array.length > 0 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                            Analysis Results
                        </h2>
                        
                        {array.map((d, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition hover:scale-[1.01]">
                                <div className="mb-8 text-center">
                                    <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${getScoreGradient(d.score)} shadow-lg mb-4`}>
                                        <span className="text-5xl font-bold text-white">{d.score}</span>
                                    </div>
                                    <p className="text-gray-600 font-medium">Match Score</p>
                                </div>

                                <div className="mb-6 p-5 bg-green-50 rounded-xl border border-green-200">
                                    <h3 className="flex items-center text-lg font-semibold text-green-800 mb-3">
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        Strengths
                                    </h3>
                                    {d.Strength.length > 0 ? (
                                        <ul className="space-y-2">
                                            {d.Strength.map((strength, i) => (
                                                <li key={i} className="flex items-start text-green-700">
                                                    <span className="mr-2 mt-1">•</span>
                                                    <span>{strength}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-green-700">No strengths identified</p>
                                    )}
                                </div>

                                <div className="mb-6 p-5 bg-red-50 rounded-xl border border-red-200">
                                    <h3 className="flex items-center text-lg font-semibold text-red-800 mb-3">
                                        <AlertCircle className="w-5 h-5 mr-2" />
                                        Missing Keywords
                                    </h3>
                                    {d.Missing_keywords.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {d.Missing_keywords.map((keyword, i) => (
                                                <span key={i} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-red-700">No missing keywords</p>
                                    )}
                                </div>

                                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                                    <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                                        <Lightbulb className="w-5 h-5 mr-2" />
                                        Suggestions for Improvement
                                    </h3>
                                    {d.Suggestions.length > 0 ? (
                                        <ul className="space-y-2">
                                            {d.Suggestions.map((suggestion, i) => (
                                                <li key={i} className="flex items-start text-blue-700">
                                                    <span className="mr-2 mt-1">→</span>
                                                    <span>{suggestion}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-blue-700">No suggestions available</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}