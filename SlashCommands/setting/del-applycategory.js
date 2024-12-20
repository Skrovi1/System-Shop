const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-applycategory",
  description:"to del applycategory",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`appcat_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete The ApplyTeam Category ✅**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
