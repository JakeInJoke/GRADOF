const express = require("express");
const reload = require("reload");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);
app.use(
  "/views",
  express.static(path.resolve(__dirname, "frontend", "static/views/vCont"))
);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 5060, () => {
  console.log("Servidor corriendo...");
  if (process.send) {
    process.send({ event: "online", url: "http://localhost:5060/" });
  }
});
//reload(app);
