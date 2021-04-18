/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all event

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const ready = require('./src/ready');
const message = require('./src/message');

module.exports = (client) => {
  client.on('ready', () => {
    ready.starting(client);
  });

  client.on('message', (msg) => {
    message.msg(msg, client);
  });
};
