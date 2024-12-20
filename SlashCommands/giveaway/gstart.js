const Discord = require("discord.js")
const ms = require("ms")
//let message = require("../utils/message.js")

module.exports = {
  name:"gstart",
  description:"to start a giveaway",
  options:[{
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

    const giveawayDuration = interaction.options.getString('duration');
    const giveawayWinnerCount = interaction.options.getInteger('winners');
    const giveawayPrize = interaction.options.getString('prize');

  const messagechannel = interaction.channel;

    // start giveaway
client.giveawaysManager.start(messagechannel, {
        prize: giveawayPrize,
        duration: ms(giveawayDuration),
        winnerCount: parseInt(giveawayWinnerCount),
        hostedBy: interaction.member,
        messages: {
giveaway: "<a:n_:1034193561765289996>  **Giveaway** ",
          giveawayEnded: "<a:n_:1034193561765289996>  **Giveaway End** ",
           drawing: "**<:droid_timer:1042761796639006740> Time Remaining** : {timestamp}",
          // dropMessage: "Be the first to react with 🎉 !",
          inviteToParticipate: "**React with <a:pp196:1042817053704343582>  to enter <a:s_:1034193556501442610> **",
          winMessage:
            "**Congratulations, {winners}! You won **{this.prize}**",
           embedFooter: "{this.winnerCount} winner(s)",
          noWinner: "Giveaway cancelled, no valid participations.",
           winners: "Winner(s):",
           endedAt: "Ended at",
      
      
    


      
        }
    });
    interaction.reply({
      content:
        `Done`,
      ephemeral: true
    })
/*
    if (bonusRole) {
      let giveaway = new MessageEmbed()
        .setAuthor(`Bonus Entries Alert!`)
        .setDescription(
          `**${bonusRole}** Has **${bonusEntries}** Extra Entries in this giveaway!`
        )
        .setColor("#00FFFF")
        .setTimestamp();
      giveawayChannel.send({ embeds: [giveaway] });
    }*/

  }

};



