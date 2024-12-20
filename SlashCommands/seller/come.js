const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"come",
  description:"to come a member",
  options : [{
    name : "user",
    description: "user you want to come",
    type: 6,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getUser("user")
          interaction.reply(`
> **Done Send Private to ${user}** <a:flower:1032658526683811931>

> **Please Wait Come Seller ** <a:Yred:1032658857673117737>
`)
    user.send(`⚠️ ${user} { <#${interaction.channel.id}> } تم طلبك هنا من فضلك come to Ticket ⚠️`)
      
} catch (err) {
      console.log(err)
  }
 }
}
