const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-log",
  description:"to set a del room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`log_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete The Log Room **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
