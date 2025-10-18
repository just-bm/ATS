const GoogleGenAI = require('@google/genai');

const ai = new GoogleGenAI({});

async function ai_function(keywords, jobtiltes, pdf_content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${pdf_content} This is the given content of a pdf-resume, analyse it ATS Score, With respect to this keywords:[${keywords}] with these job titles:[${jobtiltes}]`,
  });
  const res = response.text;
  return res;
}

await ai_function;
