const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const { CLIENT_ID, CLIENT_SECRET } = require("../config/oauth.config");

const STRATEGY_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
};

function verify(accessToken, refreshToken, profile, done) {
  done(null, profile);
}

passport.use(new Strategy(STRATEGY_OPTIONS, verify));

passport.serializeUser((user, done) => {
  done(null, user.emails[0]["value"]);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
