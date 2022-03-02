const Discord = require("discord.js");
const colors = require("../config/colors.json");
const emojis = require("../config/emojis.json");

const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('flags')
    .setDescription('Countries of the World'),
  async execute(interaction) {

    let onIntro = new Discord.MessageEmbed()
      .setColor(colors.blank)
      .setTitle("Flags of the World")
      .addField("Easy Difficulty", `${emojis.easy} 10`)
      .addField("Medium Difficulty", `${emojis.medium} 25`)
      .addField("Hard Difficulty", `${emojis.hard} 50`)
      .addField("Expert Difficulty", `${emojis.expert} 100`)
      .addField("Mr. Worldwide", `${emojis.worldwide} 196`)
      .setFooter({
        text: "If you encounter any issues, message Flaming#3275"
      });

    const onRow = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setCustomId('primary')
        .setLabel('Primary')
        .setStyle('PRIMARY'),
      )

    await interaction.reply({
      embeds: [onIntro]
    });
  },
};