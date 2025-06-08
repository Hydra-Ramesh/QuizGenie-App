import extractJson from "../utils/parseJsonFromText.js";
import ai from "../config/googleAi.js";

export const evaluateAnswer = async (req, res, next) => {
  try {
    const { question, userAnswer, correctAnswer } = req.body;

    if (!question || !userAnswer || !correctAnswer) {
      return res.status(400).json({ error: 'Missing question, userAnswer, or correctAnswer' });
    }

    const prompt = `
      Evaluate the user's answer.
      Question: ${question}
      User's Answer: ${userAnswer}
      Correct Answer: ${correctAnswer}

      Return a JSON object like this:
      {
        "isCorrect": true or false,
        "explanation": "brief reason"
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });

    const evaluation = extractJson(response.text);

    if (typeof evaluation.isCorrect !== 'boolean' || !evaluation.explanation) {
      return res.status(500).json({ error: 'Invalid evaluation format from AI' });
    }
    res.json(evaluation);
  } catch (error) {
    next(error);
  }
};
