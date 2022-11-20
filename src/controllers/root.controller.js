function handleGetRoot(req, res) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (isLoggedIn) {
    res.render("logged", { username: req.user });
  } else {
    res.render("index");
  }
}

module.exports = {
  handleGetRoot,
};
