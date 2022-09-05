const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Mongoose Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
const eventRoute = require("./routes/api/EventRoute");
const staffRoute = require("./routes/api/StaffRoute");

// use Routes
app.use("/api/event", eventRoute);
app.use("/api/staff", staffRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});