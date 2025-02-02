import express from "express";
import fetch from "node-fetch";
const app = express();
import cors from 'cors';
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
