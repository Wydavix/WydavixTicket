/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all event

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const ready = require('./src/ready');

module.exports = (client) => {
  client.on('ready', () => {
    ready.starting(client);
  });
};
