require("dotenv").config();

const express = require("express");
const connectDB = require("./database/db");
const path = require("path");

const app = express();

// Connect to database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/user/user"));
app.use("/api/auth", require("./routes/auth/auth"));
app.use("/api/orders", require("./routes/orders/orders"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
