const express = require("express");
const app = express();

app.use("/payRoute")


console.log("test")
console.log("test2")

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server start on port", port));
