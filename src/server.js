const https = require("https");
const app = require("./app");
const { CERT_PEM, KEY_PEM } = require("./config/tls.config");
const { PORT } = require("./config/server.config");

server = https.createServer(
  {
    key: KEY_PEM,
    cert: CERT_PEM,
  },
  app
);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
