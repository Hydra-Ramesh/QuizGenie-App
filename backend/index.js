import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoute from "./routes/quizRoute.js";
import evaluateRoute from "./routes/evaluationRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", quizRoute);
app.use("/api/v1", evaluateRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})