const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-offers",
  description:"to del a offers room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`off_${interaction.guild.id}`)
      interaction.reply(`> **Done Del The Offers Room **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
