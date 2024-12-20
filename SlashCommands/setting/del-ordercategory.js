const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-ordercategory",
  description:"to del ordercategory",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`orcat_${interaction.guild.id}` , link)
      interaction.reply(`> **Done Set The Order Category ✅**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
