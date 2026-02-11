import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";

const app= express();

// To accept the incoming request from the client-side
app.use(cors({origin:"http://localhost:5173",credentials:true}));

// To parse the incoming json request bodies
app.use(express.json());

// API endpoint for the health check of server
app.use("/api/health",healthRouter);

// Global 404 error handling 
app.use((req,res)=>{
    res.status(404).json({
        message:"Not found"
    })
});

// Global error handler (minimal)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

export default app;