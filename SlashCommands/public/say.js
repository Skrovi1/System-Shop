const { MessageEmbed, Discord } = require('discord.js');
module.exports = {
  name: "say",
  description: "to send something with bot",
  options : [{
    name: "text",
    description: "the text you want to send with bot",
    type : 3,
    required: true,
  }],

  run: async (client, interaction, args) => {
    try {
      let text = interaction.options.getString('text')
      interaction.reply({content:"kosomak" , ephemeral:true})
      interaction.channel.send({ content: ` **${text}** `})
    } catch (err) {
      console.log(err)
    }
  }
}