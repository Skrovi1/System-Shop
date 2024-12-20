const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-orderbots",
  description:"to set orderbots",
  options : [{
    name : "id",
    description: "category id",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('id')
      db.set(`orbcat_${interaction.guild.id}` , link)
      interaction.reply(`> **Done Set The Order Category ✅**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
