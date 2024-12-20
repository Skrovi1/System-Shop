const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-orderbotscategory",
  description:"to del orderbotscategory",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`orbcat_${interaction.guild.id}` , link)
      interaction.reply(`> **Done Set The Order Category ✅**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
