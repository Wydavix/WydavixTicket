const bdd = require("../../function").bdd;
const message_init = require("../../config").message_embed.init;
const message = require("../../config").message_embed;
const permission = require("../../function").permissions;

function cmd(option) {
  const { commande, args, msg, channel, client, embed } = option;
  permission.ownerbot(msg.author.id, (cb) => {
    if (!cb) {
      return embed.create({
        color: "red",
        title: "echec purge",
        description: "vous n'avez pas la permissions",
        channel: channel,
      });
    } else {
      bdd(async (bdd) => {
        await bdd
          .query("SELECT * FROM channel_for_config WHERE id_server = ?", [
            msg.guild.id,
          ])
          .then((row) => {
            if (row[0]) {
              const cha = msg.guild.channels.cache.find(
                (ch) => ch.id === row[0].id_channel
              );
              cha.delete();
            }
          });

        await bdd.query("TRUNCATE TABLE server").then(() => {
          embed.create({
            color: "green",
            title: "success purge",
            description: "la table server a était correctement purge",
            channel: channel,
            duration: 10000,
          });
        });

        await bdd.query("TRUNCATE TABLE channel_for_config").then(() => {
          embed.create({
            color: "green",
            title: "success purge",
            description:
              "la table channel_for_config a était correctement purge",
            channel: channel,
            duration: 10000,
          });
        });

        await bdd.query("TRUNCATE TABLE temp_configuration").then(() => {
          embed.create({
            color: "green",
            title: "success purge",
            description:
              "la table temp_configuration a était correctement purge",
            channel: channel,
            duration: 10000,
          });
        });

        await bdd.query("TRUNCATE TABLE configuration_server").then(() => {
          embed.create({
            color: "green",
            title: "success purge",
            description:
              "la table configuration_server a était correctement purge",
            channel: channel,
            duration: 10000,
          });
        });
      });
    }
  });
}

function info() {
  const info = {
    name: "purge",
    description:
      "la commande ne peut être executer uniquement par DevNetwork#7399 ",
  };

  return info;
}

module.exports = { cmd, info };
