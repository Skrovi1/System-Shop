const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-srlink",
  description:"to set link",
  options : [{
    name : "link",
    description: "server link",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('link')
      db.set(`srlink_${interaction.guild.id}` , link)
      interaction.reply({
        content: `> **Done Set The Server Link ✅**
        ${link}`,
         })
      
} catch (err) {
      console.log(err)
  }
 }
}
