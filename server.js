const express = require("express");
const app = express();

app.use("/customer")

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server start on port", port));
