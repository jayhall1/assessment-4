// const express = require("express");
// const cors = require("cors");

// const app = express();


// app.use(cors());

// app.use(express.json()); 

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("insultButton").onclick = function () {
    axios.get("http://localhost:4000/api/insult/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("inspireButton").onclick = function () {
    axios.get("http://localhost:4000/api/inspire/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("factButton").onclick = function () {
    axios.get("http://localhost:4000/api/fact/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });

  };
  document.getElementById("jokeButton").onclick = function () {
    axios.get("http://localhost:4000/api/joke/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };