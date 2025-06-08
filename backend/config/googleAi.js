import {GoogleGenAi} from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if(!GEMINI_API_KEY){
    console.error("Gemini API key is not set");
    process.exit(1);
}

export const ai = new GoogleGenAi({apiKey : GEMINI_API_KEY});