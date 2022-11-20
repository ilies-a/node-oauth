const path = require("path");
const express = require("express");
const helmet = require("helmet");
const authRouter = require("./routers/auth/auth.router");
const passport = require("./services/passport.service");
const cookieSession = require("cookie-session");
const { handleGetRoot } = require("./controllers/root.controller");
const { COOKIE_KEY_1, COOKIE_KEY_2 } = require("./config/cookie.config");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY_1, COOKIE_KEY_2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", handleGetRoot);
app.use("/auth", authRouter);

module.exports = app;
