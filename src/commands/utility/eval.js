const Discord = require("discord.js");
const colors = require("../../config/colors.json");
const utils = require("../../Config/utils");
const { inspect } = require("util");

class evaluate {
  constructor() {
    this.name = "eval";
    this.aliases = ["e", "evaluate"];
    this.description = "Evaluate JavaScript code";
    this.usage = ["eval <code>"];
    this.category = "Owner";
  }

  async onRun(client, msg, args) {
    if (!utils.permissions.owners.includes(msg.author.id)) return;

    try {
      let toEval = args[0] ? args.join(" ") : null;
      let evaluated = inspect(eval(toEval, { depth: 0 }));

      return msg.channel.send(`\`\`\`js\n${evaluated}\n\`\`\``);
    } catch (e) {
      let onError = new Discord.MessageEmbed()
        .setColor(colors.error)
        .addField(
          "Error Occurred",
          `\`\`\`js\n${e.name}\n\n${e.message}\n\`\`\``
        );
      msg.channel.send(onError);
      return;
    }
  }
}

module.exports = evaluate;