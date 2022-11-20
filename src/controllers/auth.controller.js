const passport = require("../services/passport.service");

function passportAuthenticateMiddleware(req, res, next) {
  passport.authenticate("google", {
    scope: ["email"],
  })(req, res, next);
}

function passportAuthenticateCallbackMiddleware(req, res, next) {
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    successRedirect: "/",
  })(req, res, next);
}

function handleAuthenticateFailure(req, res) {
  return res.send("Failed to log in");
}

function handleLogout(req, res) {
  req.logout();
  return res.redirect("/");
}

module.exports = {
  passportAuthenticateMiddleware,
  passportAuthenticateCallbackMiddleware,
  handleAuthenticateFailure,
  handleLogout
};
