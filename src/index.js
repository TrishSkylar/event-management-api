const server = require('./app');
const {
  PORT,
  HOST
} = require('./settings/constants');

/* Running server */
server.listen(PORT, HOST, () => 
  console.log(`Running server on http://${HOST}:${PORT}`)
);
