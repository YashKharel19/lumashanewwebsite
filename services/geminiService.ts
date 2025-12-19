
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateDailyWord = async (language: string): Promise<AIResponse> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Give me a daily fun word to learn for kids in ${language}.`,
    config: {
      systemInstruction: "You are a fun, friendly preschool teacher. Provide educational content that is safe and engaging for kids aged 2-8.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING, description: "The word in the requested language script" },
          translation: { type: Type.STRING, description: "English translation" },
          pronunciation: { type: Type.STRING, description: "Phonetic pronunciation for English speakers" },
          funFact: { type: Type.STRING, description: "A simple fun fact or short sentence using the word" }
        },
        required: ["word", "translation", "pronunciation", "funFact"]
      }
    }
  });

  return JSON.parse(response.text);
};
