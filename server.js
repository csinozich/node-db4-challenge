const express = require("express");

const db = require("./data/db-config.js");

const server = express();

server.use(express.json());

server.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await db("recipes");
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "error fetching recipes" });
  }
});
