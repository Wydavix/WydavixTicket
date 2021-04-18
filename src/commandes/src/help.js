/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for commande "help" for help everyone

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const fs = require('fs');
let all_commande = '';

fs.readdirSync(__dirname)
  .filter((file) => file !== 'help.js' && file !== 'blank.js')
  .forEach((file) => {
    const { name, description } = require(`./${file}`).info();
    all_commande += `> **-** \`\`${name}\`\` : ${description} \n\n`;
  });

function cmd(option) {
  const { commande, args, msg, channel, client, embed } = option;
  if (all_commande === '') all_commande = 'Aucune commandes disponnible';
  embed.create({
    color: 'blue',
    title: ':gear: Help',
    description: all_commande,
    channel: channel,
  });
}

module.exports = { cmd };
