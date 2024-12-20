const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-applyroom",
  description:"to del a apply room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`applyroom_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete Apply Room**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
