import express from "express";
import generateQuiz from "../controllers/quizController.js";

const router = express.Router();

router.post("/generate-quiz",generateQuiz);

export default router;