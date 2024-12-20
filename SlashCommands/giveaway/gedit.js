const Discord = require("discord.js")
const ms = require("ms")
//let message = require("../utils/message.js")

module.exports = {
  name:"gedit",
  description:"to start a giveaway",
  options:[{
    name:"id-giv",
    description:"id-giv",
    type:3,
    required:true
  },{
    name:"duration",
    description:"duration",
    type:3,
    required:true
  },{
    name:"winners",
    description:"winners",
    type:4,
    required:true
  },{
    name:"prize",
    description:"prize",
    type:3,
    required:true
  }],


  run: async(client, interaction, args) => {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });
        const gid = interaction.options.getString('id-giv');
        const time = interaction.options.getString('duration');
        const winnersCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');
        
        await interaction.deferReply({
         ephemeral: true
        })
        // Edit the giveaway
        try {
        await client.giveawaysManager.edit(gid, {
            newWinnersCount: winnersCount,
            newPrize: prize,
            addTime: time
        })
        } catch(e) {
return interaction.editReply({
            content:
                `i can't find message ID: \`${gid}\``,
            ephemeral: true
        });
        }
        interaction.editReply({
            content:
                `>  **Done Edit** `,
            ephemeral: true
        });
    }
  }





