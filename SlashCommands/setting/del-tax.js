const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-tax",
  description:"to del a tax room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`tax_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete The Tax Room  **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
