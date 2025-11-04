import express from "express";
import router from "./app/routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHanlder from "./app/middlewares/globalErrorHandler.js";
import notFound from "./app/middlewares/notFound.js";

const app = express();

// perser --------
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// all routes ----------
app.use('/api/v1', router);

app.get('/', async(req, res) =>{
    res.send("server is running");
});

app.use(globalErrorHanlder);
app.use(notFound);

export default app;