const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "your coding skills are nice.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.use(express.json());
app.get("/api/fortune", (req, res) => {
  const fortunes = ["a person is never to sick or old to learn",
					 "may good fortune come your way",
					 "your future is like a dim flashlight bright enough",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.get("/api/insult", (req, res) => {
  const insults = ["a person is never to sick or old to learn but you might be lol",
					 "for you success is like... sorry i cant think of anything",
					 "your future is like a dim flashlight that sometimes works and isnt very bright",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * insults.length);
  let randominsult = insults[randomIndex];

  res.status(200).send(randominsult);
  
});
app.get("/api/inspire", (req, res) => {
  const inspires = ["be the change you want to see in the world",
					 "this is your world were just living in it",
					 "your future is very bright",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * inspires.length);
  let randominspire = inspires[randomIndex];

  res.status(200).send(randominspire);
})
app.get("/api/fact", (req, res) => {
  const facts = ["apparently being somalian you have no religious choice i didnt know that source mahad",
					 "im the best brawlhala player in the server... maybe",
					 "we orbit the sun",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * facts.length);
  let randomfact = facts[randomIndex];

  res.status(200).send(randomfact);
})

app.get("/api/joke", (req, res) => {
  const jokes = ["have you heard of that new movie constipation? because it hasnt come out yet",
					 "what do you call ghost poop? boo boo",
					 "what is micahel jacksons denim store called? billie jeans",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomjoke = jokes[randomIndex];

  res.status(200).send(randomjoke);
})
app.listen(4000, () => console.log("Server running on 4000"));
