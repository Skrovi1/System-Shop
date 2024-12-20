const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"hide",
  description:"to hide a room",

  run: async(client, interaction, args) => {
    try {
      if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
interaction.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL : false
            }).then(() => {
interaction.reply(`**✅  ${interaction.channel} Done Hided this room.**`)
})
   
} catch (err) {
      console.log(err)
  }
 }
}