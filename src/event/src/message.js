/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for event Message

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const commandes = require("../../commandes");
const message_function = require("../../function").message;
const config = require("../../config");

module.exports = class message {
  static msg(msg, client) {
    this.commande(msg, client);
  }

  static commande(msg, client) {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(config.prefix))
      return message_function.remote(msg, client);
    const args = msg.content.slice(config.prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command) {
      commandes.remote({
        commande: command,
        args: args,
        msg: msg,
        channel: msg.channel,
        client: client,
      });
    }
  }
};
