const { EmbedBuilder , Discord , PermissionsBitField, MessageActionRow , MessageButton } = require('discord.js');
module.exports = {
  name:"dm",
  description:"to come a member",
  options : [{
    name : "user",
    description: "user you want to come",
    type: 6,
    required: true,
  },{
    name : "text",
    description: "text",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getUser("user")
      let text = interaction.options.getString("text")
          interaction.reply(`
> **Done Send Private to ${user}** <a:flower:1032658526683811931>

> **Please Wait Come Seller ** <a:Yred:1032658857673117737>
`)
    user.send({ content: `${text} \nSent From ${interaction.channel}\n${user} <a:Crown_dark_red:1047281448123650048>` , components : [
              new MessageActionRow()
              .addComponents(
                new MessageButton()
                .setDisabled(true)
                .setLabel(`Sent From ${interaction.guild.name}`)
                .setStyle("SECONDARY")
                .setCustomId("kosomkolelcopypasters")
              )
    ]})
      
} catch (err) {
      console.log(err)
  }
 }
}
