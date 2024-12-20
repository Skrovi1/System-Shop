const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-upgraderoom",
  description:"to del a upgrad room",


  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      db.delete(`upgrade_${interaction.guild.id}`)
      interaction.reply(`> **Done Delete The Upgrade Room**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
