const express = require("express");
const app = express();
const userRouter = require("./router/userRoutes");
app.use(express.json());

const port = 1212;

app.use("/", userRouter);

const mongoose = require("mongoose");
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

const route = require("./router");
app.use("/", route);
