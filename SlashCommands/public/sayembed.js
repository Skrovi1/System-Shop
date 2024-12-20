const { MessageEmbed, Discord } = require('discord.js');
module.exports = {
  name: "say-embed",
  description: "to send embed with bot",
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
      interaction.channel.send({ embeds: [
        new MessageEmbed()
     .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true}) })
     .setFooter({ text: `Requested by ${interaction.guild.name}`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setDescription(`**${text}**`)
      ]})
    } catch (err) {
      console.log(err)
    }
  }
}