const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts")
const app = express();
const PORT = 5050;

//for static file
app.use(express.static(path.join(__dirname, "public")))

// for templating engine ejs 
app.use(expressLayouts)
app.set("layout", "layout/layout.ejs");
app.set('view engine', 'ejs');

//for router
app.use('/', require(path.join(__dirname, "route/route.js")))

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
