const bdd = require("./function.bdd");

async function remote(msg, client) {
  bdd(async (bdd) => {
    await bdd
      .query(
        "SELECT * FROM temp_configuration WHERE id_channel = ? AND id_server = ?",
        [msg.channel.id, msg.guild.id]
      )
      .then((row) => {
        if (row[0]) {
          const required = require("./configurator")[parseInt(row[0].step)];
          require(required)(msg, client);
        }
      });
  });
}

module.exports = { remote };
