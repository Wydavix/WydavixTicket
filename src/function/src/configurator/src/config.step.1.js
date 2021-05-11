const embed = require("../../../").embed;
const message_config = require("../../../../config").message_embed.config;
const bdd = require("../../../").bdd;
module.exports = (msg, client) => {
  if (!isNaN(msg.content)) {
    const channel_ticket = msg.guild.channels.cache.find(
      (ch) => ch.id === msg.content
    );
    if (channel_ticket) {
      msg.channel.bulkDelete(100);
      embed.create({
        color: "green",
        title: message_config.succes.finish.title,
        description: `"${channel_ticket.name}"${message_config.succes.finish.description}`,
        channel: msg.channel,
        duration: 10000,
      });

      bdd((bdd) => {
        bdd.query(
          "UPDATE temp_configuration SET id_channel_ticket = ?, step = ? WHERE id_channel = ? AND id_server = ?",
          [channel_ticket.id, 2, msg.channel.id, msg.guild.id]
        );

        bdd.query(
          "INSERT INTO configuration_server (id_server, id_channel, title_message_ticket, message_channel_ticket, color_channel_ticket, icon_channel_ticket ) VALUE (?,?,?,?,?,?)",
          [
            msg.guild.id,
            channel_ticket.id,
            message_config.other.ticket_basic.title,
            message_config.other.ticket_basic.description,
            message_config.other.ticket_basic.color,
            message_config.other.ticket_basic.react,
          ]
        );

        embed.create({
          color: "blue",
          title: message_config.succes.step_2.title,
          description: `${message_config.succes.step_2.description[0]}\`#${channel_ticket.name}\`${message_config.succes.step_2.description[1]}"${message_config.other.ticket_basic.title}"${message_config.succes.step_2.description[2]}`,
          channel: msg.channel,
        });

        msg.channel.send({ files: ["./src/element/exemple_2_0_config.png"] });
      });
    } else {
      embed.create({
        color: "red",
        title: message_config.error.step_1.error_channel_unkwon.title,
        description: `"${msg.content}"${message_config.error.step_1.error_channel_unkwon.description}`,
        channel: msg.channel,
      });
    }
  } else {
    embed.create({
      color: "red",
      title: message_config.error.step_1.error_content_isnot_number.title,
      description: `"${msg.content}"${message_config.error.step_1.error_content_isnot_number.description}`,
      channel: msg.channel,
    });
  }
};
