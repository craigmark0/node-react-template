const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fakeData = require("./fakeData");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello Worldzz!"));
app.get("/all_bookings", (req, res) => {
  console.log("asking for update");
  res.json({ success: true, response: fakeData });
});

// app.post("/question", (req, res) => {
//   console.log(req.body);
//   res.json({ success: true, response: "question posted successfully" });
// });

app.listen(3001, () => console.log("Example app listening on port 3001!"));
