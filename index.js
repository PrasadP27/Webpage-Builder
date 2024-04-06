const express = require("express");
const path = require("path");
const app = express();
const PORT = 5050;

//for static file
app.use(express.static(path.join(__dirname, "public")))

//for router
app.use('/', require(path.join(__dirname, "route/route.js")))

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
