const Discord = require("discord.js");
const colors = require("../../config/colors.json");
const utils = require("../../Config/utils");
const { inspect } = require("util");

class help {
  constructor() {
    this.name = "help";
    this.aliases = ["h", "commands", "cmds"];
    this.description = "A very helpful command :)";
    this.usage = ["help", "help [command]"];
    this.category = "Miscellaneous";
  }

  async onRun(client, msg, args) {
    if (args[0]) {
        return msg.channel.send("Under Development..");
    } else {
        let onHelp = new Discord.MessageEmbed();
        return msg.channel.send("Under Development..");
    }
  }
}

module.exports = help;