const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"ban",
  description:"to ban a member",
  options : [{
    name : "user",
    description: "user you want to ban",
    type: 6,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if(!interaction.member.permissions.has("BAN_ROLES")) return interaction.reply(`** 😕 You don't have permission **`);
   if(!interaction.guild.me.permissions.has('BAN_ROLES')) return interaction.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let user = interaction.options.getMember('user')
    if(user.roles.highest.position >= interaction.member.roles.highest.position && interaction.user.id !== interaction.guild.fetchOwner().id) return interaction.reply(`** ❌ You can't ban this user**`);
    if(!user.bannable) return interaction.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await interaction.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
      
} catch (err) {
      console.log(err)
  }
 }
}
