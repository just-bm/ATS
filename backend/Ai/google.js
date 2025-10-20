// // const GoogleGenAI = require('@google/genai');
// const { GoogleGenerativeAI } = require("@google/generative-ai");


// // const ai = new GoogleGenAI({});
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


// async function ai_function(keywords, jobtiltes, pdf_content) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: `${pdf_content} This is the given content of a pdf-resume, analyse it ATS Score, With respect to this keywords:[${keywords}] with these job titles:[${jobtiltes}]`,
//   });
//   const result = response.text;
//   return result;
// }

// // export default function ai_function;
// module.exports = ai_function;


require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function ai_function(keywords, jobTitles, pdf_content, expience) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
  You are an ATS (Applicant Tracking System) analyzer.
  Analyze the following resume content and calculate an ATS score based on
  how well it matches the given job titles and keywords.

  Resume Content:
  ${pdf_content}

  Job Titles: [${jobTitles}]
  Keywords: [${keywords}]
  Years of Expreinece: [${expience}]
  Return a short structured response as a form of json with:
  {
  score: ATS Score (0 - 100)
  Strength: [Array of the Strenght]
  Missing_keywords: [Array of missing keyword]
  Suggestions: [Improvement Suggestion]
  }

  only return json, json only, no string or anything

  just send json, no need for any backtriks
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error generating ATS analysis.";
  }
}

module.exports = ai_function;
