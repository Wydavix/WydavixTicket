const function_basic = require('../../function').basic;

module.exports = class Ready {
  static starting(client) {
    let nb = 0;
    setInterval(() => {
      require('../../config/src/message.status')(client);
      const message_status = require('../../config/src/message.status')(client);
      client.user.setActivity(message_status[nb]);
      nb = function_basic.autoIncrement(nb, 2, 1);
    }, 15000);
    client.user.setStatus('dnd');
  }
};
