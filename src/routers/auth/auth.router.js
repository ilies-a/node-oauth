const { Router } = require("express");
const {
  passportAuthenticateMiddleware,
  passportAuthenticateCallbackMiddleware,
  handleAuthenticateFailure,
  handleLogout
} = require("../../controllers/auth.controller");

const authRouter = new Router();

authRouter.get("/google", passportAuthenticateMiddleware);
authRouter.get("/google/callback", passportAuthenticateCallbackMiddleware);
authRouter.get("/google/failure", handleAuthenticateFailure);
authRouter.get("/logout", handleLogout);

module.exports = authRouter;
