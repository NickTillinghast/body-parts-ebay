require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");

app.use(express.static(__dirname + "/../build"));

const {
  register,
  logout,
  userSession,
  login
} = require("./controller/userController");

app.use(express.json());
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  console.log("database connected");

  // resetting entire db on server restart
  db.init().then(() => {
    app.set("db", db);
  });
  // not reseting entire db on server restart
  // app.set("db", db)
});
app.post("/auth/register", register);
app.get("/auth/user_session", userSession);
app.delete("/auth/logout", logout);
app.post("/auth/login", login);

app.get("/api/inventory", (req, res, next) => {
  const db = req.app.get("db");
  db.query("SELECT * FROM inventory;").then(inventory => {
    res.status(200).send(inventory);
  });
});
// app.get("/api/test", (req, res, next) => {
//   const db = req.app.get("db");
//   db.query("SELECT * FROM users;").then(users => {
//     res.status(200).send(users);
//   });
// });

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`up and running on port ${port}`));
