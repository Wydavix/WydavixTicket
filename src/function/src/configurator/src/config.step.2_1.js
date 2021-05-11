const embed = require("../../../").embed;
const bdd = require("../../../").bdd;
const message_embed = require("../../../../config").message_embed.config;

module.exports = (msg, client) => {
  if (msg.content === "next" || msg.content === "suivant") {
    bdd((bdd) => {
      bdd.query(
        "UPDATE temp_configuration SET step = ? WHERE id_channel = ? AND id_server = ?",
        [4, msg.channel.id, msg.guild.id]
      );
    });

    msg.channel.bulkDelete(100);
    embed.create({
      color: "blue",
      title: message_embed.succes.step_4.title,
      description: message_embed.succes.step_4.description,
      channel: msg.channel,
    });
  } else if (msg.content === "view") {
    bdd((bdd) => {
      bdd
        .query("SELECT * FROM configuration_server WHERE id_server = ?", [
          msg.guild.id,
        ])
        .then((row) => {
          if (row[0]) {
            embed.create({
              color: "blue",
              title: row[0].title_message_ticket,
              description: row[0].message_channel_ticket,
              channel: msg.channel,
            });
          }
        });
    });
  } else {
    bdd(async (bdd) => {
      await bdd
        .query("SELECT * FROM configuration_server WHERE id_server = ?", [
          msg.guild.id,
        ])
        .then((row) => {
          if (row[0]) {
            embed.create({
              color: "green",
              title: message_embed.succes.step_3_valid.title,
              description: `${message_embed.succes.step_3_valid.description[0]}${row[0].title_message_ticket}${message_embed.succes.step_3_valid.description[1]}${msg.content}${message_embed.succes.step_3_valid.description[2]}`,
              channel: msg.channel,
            });
          }
        });
      await bdd
        .query("SELECT * FROM temp_configuration WHERE id_server = ?", [
          msg.guild.id,
        ])
        .then((row) => {
          if (row[0]) {
            bdd.query(
              "UPDATE configuration_server SET message_channel_ticket = ? WHERE id_server = ? AND id_channel = ?",
              [msg.content, msg.guild.id, row[0].id_channel_ticket]
            );
          }
        });
    });
  }
};
