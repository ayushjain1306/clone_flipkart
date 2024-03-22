import connection from "./database/db.js";
import Router from "./router/route.js";
import express from "express";
import cors from "cors";

const app = express();

<<<<<<< HEAD
app.use(cors({
    origin: "https://clone-filpkart-mern-stack.vercal.app",
    methods: ["POST", "PUT", "DELETE", "PATCH", "GET", "OPTIONS"],
=======
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization');
    res.header("Access-Control-Allow-Credentials", 'true');
    next();
})

app.use(cors({
    origin: "https://clone-flipkart-mern-stack.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"],
>>>>>>> 826cd04902aa2460e9e372ecc1970e072d47ccad
    credentials: true
}));

app.use(express.json());

app.use('/', Router);

connection();

const PORT= process.env.port || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
