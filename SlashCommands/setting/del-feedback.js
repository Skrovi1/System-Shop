const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-feedback",
  description:"to del a feedback room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`fed_${interaction.guild.id}`)
      interaction.reply(`> **Done del The Feedback Room**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
