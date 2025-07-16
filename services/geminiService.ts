import { GoogleGenAI } from "@google/genai";

// Ensure the API_KEY is available in the environment variables
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
export async function generateScriptSection(promptContext: string, userInput: string): Promise<string> {
  const apiUrl = "http://localhost:5000/generate-script";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ promptContext, userInput })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Unknown error from Flask API.");
    }

    const data = await response.json();
    return data.script.trim();

  } catch (error) {
    console.error("Error calling Flask API:", error);
    throw new Error("Failed to generate script. Please try again later.");
  }
}

