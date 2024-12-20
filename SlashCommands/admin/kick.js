const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"kick",
  description:"to kick a member",
  options : [{
    name : "user",
    description: "user you want to kick",
    type: 6,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
       if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply(`** 😕 You don't have permissions **`);
    
  if (!interaction.guild.me.permissions.has('BAN_MEMBERS')) return interaction.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
    let user = interaction.options.getMember('user')
    if (!user) return interaction.reply(`** 😕 Please mention or id **`)
    if(user.roles.highest.position > interaction.guild.members.resolve(interaction.user).roles.highest.position) return 
  interaction.reply(`** ❌ You can't ban this user **`)
    if(user.roles.highest.position > interaction.guild.members.resolve(client.user).roles.highest.position) return interaction.reply(`** ❌ You can't ban this user **`)
    user.kick().then(() => interaction.reply(`**✅ @${user.user.username} kicked from the server!**`)).catch(err => interaction.reply(err))  
} catch (err) {
      console.log(err)
  }
 }
}
