const {
	inspect
} = require("util");

const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eval')
		.setDescription('Evaluate JavaScript code'),
	async execute(interaction) {

		let allowed = ["768642157279707226"];
		if (!allowed.includes(msg.author.id)) return;

		try {
			let toEval = args[0] ? args.join(" ") : null;
			let evaluated = inspect(eval(toEval, {
				depth: 0
			}));

			return interaction.channel.send(`\`\`\`js\n${evaluated}\n\`\`\``);
		} catch (e) {
			let onError = new Discord.MessageEmbed()
				.setColor(colors.error)
				.addField(
					"Error Occurred",
					`\`\`\`js\n${e.name}\n\n${e.message}\n\`\`\``
				);
			interaction.channel.send({embeds: [onError]});
			return;
		}
	},
};