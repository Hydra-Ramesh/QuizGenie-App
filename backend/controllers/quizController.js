import extractJson from "../utils/parseJsonFromText.js";
import ai from "../config/googleAi.js";

export const generateQuiz = async (req, res, next) => {
  try {
    const { topic, questionCount, difficulty } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const prompt = `Generate ${questionCount} multiple choice questions about ${topic} with ${difficulty} difficulty level...`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const quizData = extractJson(response.text);
    res.json(quizData);
  } catch (error) {
    next(error);
  }
};