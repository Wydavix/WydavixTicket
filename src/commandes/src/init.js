/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for commande "init" for initialisation for system bot

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const bdd = require('../../function').bdd;
const message_init = require('../../config').message_embed.init;
const message = require('../../config').message_embed;
const permission = require('../../function').permissions;

function cmd(option) {
  const { commande, args, msg, channel, client, embed } = option;
  permission.admin(msg.member, (cb) => {
    if (!cb)
      return embed.create({
        color: 'red',
        title: message_init.error.initialisation_echec.title,
        description: message.other.error.nohavepermission,
        channel: channel,
      });
  });
  bdd((bdd) => {
    bdd
      .query('SELECT * FROM server WHERE id_server = ?', [msg.guild.id])
      .then((row) => {
        if (row[0]) {
          return embed.create({
            color: 'red',
            title: message_init.error.initialisation_echec.title,
            description: message_init.error.initialisation_echec.description,
            channel: channel,
          });
        }

        bdd.query('INSERT INTO server (id_server, id_owner) VALUE (?,?)', [
          msg.guild.id,
          msg.guild.ownerID,
        ]);

        msg.guild.channels
          .create(`${message_init.other.channel.name}`, {
            type: message_init.other.channel.type,
            topic: message_init.other.channel.topic,
            permissionOverwrites: [
              {
                allow: 'VIEW_CHANNEL',
                id: msg.author.id,
              },
              {
                deny: 'VIEW_CHANNEL',
                id: msg.guild.id,
              },
            ],
          })
          .then((ch) => {
            bdd.query(
              'INSERT INTO channel_for_config (id_channel, id_server) VALUE (?,?)',
              [ch.id, msg.guild.id],
            );

            return embed.create({
              color: 'green',
              title: message_init.succes.initialisation_success.title,
              description: `${message_init.succes.initialisation_success.description[0]}${ch.id}${message_init.succes.initialisation_success.description[1]}`,
              channel: channel,
            });
          });
      });
  });
}

function info() {
  const info = {
    name: 'init',
    description:
      'cette commandes sert a initialiser le système du bot sur le serveur  ',
  };

  return info;
}

module.exports = { cmd, info };
