const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-line",
  description:"to del line",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`line_${interaction.guild.id}`)
      interaction.reply({
        content: `> **Done Delete The Line ✅**`,
         })
      
} catch (err) {
      console.log(err)
  }
 }
}
