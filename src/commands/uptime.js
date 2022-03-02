const Discord = require("discord.js");
const colors = require("../config/colors.json");

const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const colors = require("../config/colors.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Get the client\'s uptime'),
  async execute(interaction) {

    let onSeconds = interaction.client.uptime / 1000;
    let days = Math.floor(onSeconds / 86400);
    onSeconds %= 86400;
    let hours = Math.floor(onSeconds / 3600);
    onSeconds %= 3600;
    let minutes = Math.floor(onSeconds / 60);
    let seconds = Math.floor(onSeconds % 60);

    const onUptime = new Discord.MessageEmbed()
      .setTitle("Online Time :")
      .setColor(colors.blank)
      .setDescription(
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      );

    interaction.channel.send({
      embeds: [onUptime]
    });
  },
};