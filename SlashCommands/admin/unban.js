const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
module.exports = {
  name:"unban",
  description:"to ban a member",
  options : [{
    name : "id",
    description: "id user you want to unban",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply(`** 😕 You don't have permission **`);
      
    let id = interaction.options.getString('id')
    if(isNaN(id)) {
       return interaction.reply(`** 😕 Please Provide Me A Valuied Id**`);
    } else {
interaction.guild.members.unban(id).then(mmm => {
        interaction.reply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => interaction.reply(`**I can't find this member in bans list**`));
      }
      
} catch (err) {
      console.log(err)
  }
 }
}
