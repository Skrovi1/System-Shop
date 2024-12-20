const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-welcome",
  description:"to del a welcome room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`welcome_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete The Welcome Room **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
