const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 6000;
const app = express();
const sequelize = require("./helper/db.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const { userRouter } = require("./routes/user.route");

app.use(cors({
  origin: "http://localhost:5173", // React app origin
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  credentials: true, // Allow credentials like cookies
}));


app.use(cookieParser());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/uploads"));
app.use(express.static(path.join(__dirname, "public")));

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
}).catch((error) => {
  console.error("Unable to connect to the database: ", error);
});

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET-WEB2EXPORT",
  })
);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })


