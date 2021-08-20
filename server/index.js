const express = require("express");
const cors = require("cors");
// const ctrl = require('./controller.js')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  
  
  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  
  
  let randomCompliment = compliments[randomIndex];
  
  
  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will forget all about this.",
  "If you're reading this, I need your help!",
  "You're going to want to stay inside for a while.",
  "You will be rich very soon! with consequences...",
  "Everyone in the world will look up to you. (Good luck)"                  
];

  let randomIndex = Math.floor(Math.random() * fortunes.length);

  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
})

app.get("/api/secretCompliment", (req, res) => {
  const secretCompliments = [
    "Wow, you're in great shape for your age!",
    "We should hang out!",
    "Those are some nice numbers!",
    "You are the best."
  ];

  let randomIndex = Math.floor(Math.random() * secretCompliments.length);

  let secretCompliment = secretCompliments[randomIndex];

  res.status(200).send(secretCompliment);
})



app.listen(4000, () => console.log("Server running on 4000"));
