const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"showall",
  description:"to show all rooms",

  run: async(client, interaction, args) => {
    try {
              if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

interaction.guild.channels.cache.each((channel) => { 
   channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
            VIEW_CHANNEL: true
            });
});
  interaction.reply("> ** Done __Showed__ All Server Channels**")
} catch (err) {
      console.log(err)
  }
 }
}
