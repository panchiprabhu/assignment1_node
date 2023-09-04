const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

app.get("/test", (req, res) => {
  res.send("<h1>Welcome Again!</h1>");
});

app.get("/promise1", (req, res) => {
  const promise = new Promise((resolve, reject) => {
    resolve("<h1>Promise is being performed!</h1>");
  });

  promise
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("Promise Failed", err);
      res.status(500).send("Promise could not be completed");
    });
});

app.listen(port, ()=>{
  console.log("Listening on port " + port);
});

