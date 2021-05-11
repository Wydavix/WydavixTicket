/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all commande 

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

module.exports = class commandes {
  static remote(option) {
    try {
      const embed = require("../function").embed;
      option["embed"] = embed;
      require(`./src/${option.commande}`).cmd(option);
    } catch (err) {
      option.channel.send("cette commandes est indisponnible");
    }
  }
};
