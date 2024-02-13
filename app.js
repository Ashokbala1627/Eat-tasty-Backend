const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRoutes");
const mongoose = require("mongoose");
const route = require("./router");

const port = 1212;

app.use(cors({
  origin: "https://eat-tasty-frontend-zvbc.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"], // specify the allowed HTTP methods
}));
app.use(express.json());

app.use("/", userRouter);

mongoose
  .connect(
    "mongodb+srv://AshokBala:Ashok12341627@cluster0.ik4ijvh.mongodb.net/",
    /* { useNewUrlParser: true, useUnifiedTopology: true } */
  )
  .then(() => {
    console.log("Back-end Database Connected");
    app.listen(port, () => {
      console.log("App Running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", route);
