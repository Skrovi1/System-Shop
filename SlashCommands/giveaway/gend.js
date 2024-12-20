const Discord = require("discord.js")
const ms = require("ms")
//let message = require("../utils/message.js")

module.exports = {
  name:"gend",
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

        // fetching the giveaway with message Id or prize
        const giveaway =
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway Id
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found with the corresponding input
        if (!giveaway) {
            return interaction.reply({
                content: 'Unable to find a giveaway for `' + query + '`.',
                ephemeral: true
            });
        }

        if (giveaway.ended) {
            return interaction.reply({
                content: 'This giveaway has ended',
                ephemeral: true
            });
        }

        // Edit the giveaway
        client.giveawaysManager.end(giveaway.messageId)
            // Success message
            .then(() => {
                // Success message
                interaction.reply(`>
      **Done end this giveaway**`);
            })
            .catch((e) => {
                console.log(e)
            });
  }

};



