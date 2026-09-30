const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const skillRoutes = require("./routes/skillRoutes");
const requestRoutes = require("./routes/requestRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/requests", requestRoutes);

app.get("/", (req, res) => {
    res.send("SkillSwap Backend is Running!");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});