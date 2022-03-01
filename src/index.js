const { Client, Intents, Collection } = require("discord.js");
const config = require("./config/config.json");
const client = new Client({intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_BANS, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
]});

client.commands = new Collection();
client.aliases = new Collection();
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token);