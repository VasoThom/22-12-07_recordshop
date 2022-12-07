import express from "express";
import userrouter from "./router/userrouter.js";
import recordrouter from "./router/recordrouter.js";

const app = express();

app.listen(5000, () => {
  console.log("welcome!");
});

app.use(express.json());
app.use("/users", userrouter);
app.use("/records", recordrouter);
