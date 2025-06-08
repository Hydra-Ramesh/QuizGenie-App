import express from "express";
import evaluateAnswer from "../controllers/evaluationController.js";

const router = express.Router();

router.post("/evaluate-answer", evaluateAnswer);

export default router;