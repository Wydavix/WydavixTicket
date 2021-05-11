/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for commande "help" for help everyone

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const fs = require("fs");
let all_commande = "";

fs.readdirSync(__dirname)
  .filter((file) => file !== "help.js" && file !== "blank.js")
  .forEach((file) => {
    const { name, description } = require(`./${file}`).info();
    all_commande += `> **-** \`\`${name}\`\` : ${description} \n\n`;
  });

function cmd(option) {
  const { commande, args, msg, channel, client, embed } = option;

  // const md = client.guilds.cache.find((gu) => gu.id === "777930489465798686");
  // const member = md.members.cache.find((m) => m.id === "767148140117098536");
  // member.send(
  //   "Hello MrClean can you contact `DevNetwork#7399` because you have the Wydavix Ticket bot on your discord server, while it is not yet available to the general public"
  // );

  if (all_commande === "") all_commande = "Aucune commandes disponnible";
  embed.create({
    color: "blue",
    title: ":gear: Help",
    description: all_commande,
    channel: channel,
  });
}

module.exports = { cmd };
