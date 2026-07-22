const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const roadmapRoutes = require("./routes/roadmapRoutes");
const skillRoutes = require("./routes/skillRoutes");
const aiRoutes = require("./routes/aiRoutes");
const documentRoutes = require("./routes/documentRoutes");
const skillGapRoutes = require("./routes/skillGapRoutes");
const quizRoutes = require("./routes/quizRoutes");
const learningRoadmapRoutes =require("./routes/learningRoadmapRoutes");
const dashboardRoutes =
require("./routes/dashboardRoutes");
const analyticsRoutes =
require("./routes/analyticsRoutes");
const recommendationRoutes =
require("./routes/recommendationRoutes");
const progressRoutes =
require("./routes/progressRoutes");
const adminRoutes =
require("./routes/adminRoutes");
const courseRoutes =
  require("./routes/courseRoutes");
  const enrollmentRoutes =
  require(
    "./routes/enrollmentRoutes"
  );
  const certificateRoutes =
  require("./routes/certificateRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/skills",skillRoutes);
app.use("/api/ai",aiRoutes);
// Document Routes
app.use("/api/documents",documentRoutes);const assessmentRoutes =
require(
  "./routes/assessmentRoutes"
);


// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SmartLearn Backend Running",
    version: "1.0.0",
  });
});

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Backend Healthy",
  });
});
// Skill Gap Analysis Route
app.use(
    "/api/skill-gap",
    skillGapRoutes
  );
// Quiz Route

  app.use(
    "/api/quiz",
    quizRoutes
  );
  // Learning Roadmap Route
  app.use(
    "/api/learning-roadmap",
    learningRoadmapRoutes
  );
// Assessment Route
  app.use(
    "/api/assessment",
    assessmentRoutes
  );
// Dashboard Route
  app.use(
    "/api/dashboard",
    dashboardRoutes
  );
// Analytics Route
  app.use(
    "/api/analytics",
    analyticsRoutes
  );
  // Recommendation Route
  app.use(
    "/api/recommendations",
    recommendationRoutes
  );
  // Progress Route
  app.use(
    "/api/progress",
    progressRoutes
  );
  // Admin Route
  app.use(
    "/api/admin",
    adminRoutes
  );
  // course
  app.use(
    "/api/course",
    courseRoutes
  );
// enrollment
  app.use(
    "/api/enrollment",
    enrollmentRoutes
  );
  // certificate
  app.use(
    "/api/certificate",
    certificateRoutes
  );
  
// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});