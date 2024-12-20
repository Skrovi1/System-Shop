const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-line",
  description:"to set line",
  options : [{
    name : "link",
    description: "line link",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('link')
      db.set(`line_${interaction.guild.id}` , link)
      interaction.reply({
        content: `> **Done Set The Line To ✅**
        ${link}`,
         })
      
} catch (err) {
      console.log(err)
  }
 }
}
