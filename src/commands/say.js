const Discord = require("discord.js");
const colors = require("../config/colors.json");

const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Make the client repeat your message!')
        .addStringOption(option => option
            .setName("input")
            .setDescription("The message to repeat")
            .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString("input"));
    },
};