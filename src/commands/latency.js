export const latencyCommand = {
	name: "latency",
	description: "Check bot latency",
};

export const executeLatencyCommand = async (interaction) => {
	const botLatency = Date.now() - interaction.createdTimestamp;
	await interaction.reply(`Bot latency: ${botLatency} ms`);
};