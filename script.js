const express = require("express");
const app = express();
const port = 3000;

// ROUTER
const postRouter = require("./routers/postRouter");
const employersRouter = require("./routers/employersRouter");
//const postRouter = require("./routers/post.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

// Registro le rotte

app.use("/post", postRouter);
app.use("/employers", employersRouter);
// app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
