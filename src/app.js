const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });
const config = require('./config');

require('./event')(client);

client.login(config.token);
