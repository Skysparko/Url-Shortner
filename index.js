const express = require("express");
const url = require("./routes/url");
const home = require("./routes/home");
const app = express();

const PORT = 1234;

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/urlapi", url);
app.use("/", home);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
