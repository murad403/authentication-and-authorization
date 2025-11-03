import express from "express";
import router from "./app/routes/index.js";
const app = express();


// perser --------
app.use(express.json());

// all routes ----------
app.use('/api/v1', router);

app.get('/', async(req, res) =>{
    res.send("server is running");
});

export default app;