const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-orderroom",
  description:"to del a order room",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`orderroom_${interaction.guild.id}` , chid)
      interaction.reply(`> **Done Delete The Order Room **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
