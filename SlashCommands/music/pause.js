const player = require("../../client/player");

module.exports = {
    name: "pause",
    description: "Pauses the currently playing track.",
    run: async (client, interaction) => {
                if (!interaction.member.voice.channel)
            return interaction.reply({
                content: ":no_entry_sign: **You must join a voice channel to use that!**",
            });
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({
                content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`
            })
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
        return interaction.reply({
                content: ":no_entry_sign: **There must be music playing to use that!**",
        });
        queue.setPaused(true);

        return interaction.reply({ content: `:notes: Paused **${queue.current.title}**. Type \`/resume\` to unpause!` });
    },
};
