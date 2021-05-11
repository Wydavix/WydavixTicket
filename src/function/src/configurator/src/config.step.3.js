const embed = require("../../../").embed;
const bdd = require("../../../").bdd;
const message_embed = require("../../../../config").message_embed.config;

module.exports = (msg, client) => {
  if (msg.content === "reaction") {
  } else if (msg.content === "commande") {
    bdd((bdd) => {
      bdd.query(
        "UPDATE temp_configuration SET step = ? WHERE id_channel = ? AND id_server = ?",
        [6, msg.channel.id, msg.guild.id]
      );
      msg.channel.bulkDelete(100);
      bdd
        .query("SELECT * FROM temp_configuration WHERE id_server = ?", [
          msg.guild.id,
        ])
        .then((row) => {
          if (row[0]) {
            msg.channel.bulkDelete(100);
            const ch = msg.guild.channels.cache.find(
              (ch) => ch.id === row[0].id_channel_ticket
            );
            embed.create({
              color: "blue",
              title: message_embed.succes.step_6.title,
              description: `${message_embed.succes.step_6.description[0]}\`#${ch.name}\`${message_embed.succes.step_6.description[1]}\`#${ch.name}\``,
              channel: msg.channel,
            });
            bdd
              .query(
                "SELECT * FROM configuration_server WHERE id_server = ? AND id_channel = ?",
                [msg.guild.id, ch.id]
              )
              .then((row) => {
                if (row[0]) {
                  embed.create({
                    color: "blue",
                    title: row[0].title_message_ticket,
                    description: row[0].message_channel_ticket,
                    channel: msg.channel,
                  });
                  embed.create({
                    color: "blue",
                    description: message_embed.succes.step_6.description[2],
                    channel: msg.channel,
                  });
                  bdd.query(
                    "UPDATE configuration_server SET isReact = ? WHERE id_channel = ? AND id_server = ?",
                    [false, ch.id, msg.guild.id]
                  );
                }
              });
          }
        });
    });
  }
};
