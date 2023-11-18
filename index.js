const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//ROUTE CHARACTERS
app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=Er9fYsBrzutCtXcQ",
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log("erreur", error);
    res.json({ message: "erreur" });
  }
});
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=Er9fYsBrzutCtXcQ",
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log("erreur", error);
    res.json({ message: "erreur" });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

app.listen(3000, () => {
  console.log("server started :)");
});
