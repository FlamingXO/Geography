const Discord = require("discord.js");
const colors = require("../config/colors.json");

const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};