const Discord = require("discord.js")
const ms = require("ms")
//let message = require("../utils/message.js")

module.exports = {
  name:"gresume",
  description:"to start a giveaway",
  options:[{
    name:"id-giv",
    description:"id-giv",
    type:3,
    required:true
  }],


  run: async(client, interaction, args) => {
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });

        const query = interaction.options.getString('id-giv');

        // try to find the giveaway with prize alternatively with ID
        const giveaway =
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.reply({
                content: 'Unable to find a giveaway for `' + query + '`.',
                ephemeral: true
            });
        }

        if (!giveaway.pauseOptions.isPaused) {
            return interaction.reply({
                content: `Done`,
                ephemeral: true
            });
        }

        // Edit the giveaway
        client.giveawaysManager.unpause(giveaway.messageId)
            // Success message
            .then(() => {
                // Success message
                interaction.reply(`**[This giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})** has been successfully resumed!`);
            })
            .catch((e) => {
                interaction.reply({
                    content: e,
                    ephemeral: true
                });
            });
  }

};



