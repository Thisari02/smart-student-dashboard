
import { GoogleGenAI } from "@google/genai";
import { MOCK_STUDENTS, MOCK_ACTIVITIES } from '../../constants';

/**
 * Service to handle communications with Google Gemini API.
 */
class AIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  /**
   * Generates a context-aware response based on the student dashboard data.
   */
  async getAcademicInsight(userMessage: string) {
    const systemInstruction = `
      You are the EduPulse AI Assistant, an expert educational data analyst.
      Context Data:
      - Students: ${JSON.stringify(MOCK_STUDENTS)}
      - Recent Activities: ${JSON.stringify(MOCK_ACTIVITIES)}

      Goal: Help teachers/admins understand performance, trends, and admin tasks.
      Rules: Be concise and professional. Refer to specific students. 
      If a student is underperforming (score < 80), suggest specific interventions.
      Always suggest 2-3 follow-up "Action Prompts" at the end: [ACTION: Action text]
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("AIService Error:", error);
      throw new Error("Connection failed. Please try again.");
    }
  }
}

export const aiService = new AIService();
