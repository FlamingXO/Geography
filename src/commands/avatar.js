const Discord = require("discord.js");
const colors = require("../config/colors.json");

const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {

		let user = interaction.options.getUser('target');
		if (!user) user = interaction.user;

		let onAvatar = new Discord.MessageEmbed()
			.setColor(colors.blank)
			.setTitle(`${user.username}'s Avatar`)
			.setImage(user.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
		return interaction.reply({embeds: [onAvatar]});

	},
};