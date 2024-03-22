import connection from "./database/db.js";
import Router from "./router/route.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "https://clone-flipkart-mern-stack.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));

app.use(express.json());

app.use('/', Router);

connection();

const PORT= process.env.port || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
