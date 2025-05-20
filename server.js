const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static
app.use(express.static(path.join(__dirname, "public")));

// Redirect / to Main_menu.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Main_menu.html"));
});

// Handle specific pages by direct path
const pages = [
  "Single_player",
  "multi_player",
  "tutorial",
  "about"
];

pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `${page}.html`));
  });
});

app.listen(PORT, () => {
  console.log(`🚗 Racing game server running on port ${PORT}`);
});
