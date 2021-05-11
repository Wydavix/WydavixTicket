const embed = require("../../../").embed;
const bdd = require("../../../").bdd;
const message_embed = require("../../../../config").message_embed.config;
const Discord = require("discord.js");

module.exports = (msg, client) => {
  if (msg.content === "next" || msg.content === "suivant") {
    bdd((bdd) => {
      bdd
        .query(
          "SELECT * FROM temp_configuration WHERE id_server = ?",
          msg.guild.id
        )
        .then((row) => {
          if (row[0]) {
            bdd
              .query(
                "SELECT * FROM configuration_server WHERE id_server = ? AND id_channel = ?",
                [msg.guild.id, row[0].id_channel_ticket]
              )
              .then((row2) => {
                if (row2[0]) {
                  const ch = msg.guild.channels.cache.find(
                    (ch) => ch.id === row2[0].id_channel
                  );
                  if (row2[0].isReact === 1) {
                    const embed = new Discord.MessageEmbed()
                      .setColor(row2[0].color_channel_ticket)
                      .setTitle(row2[0].title_message_ticket)
                      .setDescription(row2[0].message_channel_ticket);
                    ch.send(embed).then((ms) => {
                      ms.react(row2[0].icon_channel_ticket);
                    });
                  } else {
                    const embed = new Discord.MessageEmbed()
                      .setColor(row2[0].color_channel_ticket)
                      .setTitle(row2[0].title_message_ticket)
                      .setDescription(row2[0].message_channel_ticket);
                    ch.send(embed);
                  }
                }
              });
          }
        });
    });
  }
};
