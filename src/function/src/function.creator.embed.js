/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for constuctor "embed"

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const Discord = require("discord.js");
const config = require("../../config");

module.exports = class embed {
  static create(option) {
    const embed = new Discord.MessageEmbed();
    let ishexa = false;
    if (option.color) {
      embed.setColor(config.color[option.color]);
    }

    if (option.title) {
      embed.setTitle(option.title);
    }

    if (option.description) {
      embed.setDescription(option.description);
    }

    if (option.duration) {
      option.channel.send(embed).then((ms) =>
        setTimeout(() => {
          ms.delete();
        }, option.duration)
      );
      return;
    }

    option.channel.send(embed);
  }
};
