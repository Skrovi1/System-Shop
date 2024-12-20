const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-tag",
  description:"to set tag",
  options : [{
    name : "tag",
    description: "server tag",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('tag')
      db.set(`tag_${interaction.guild.id}` , link)
      interaction.reply({
        content: `> **Done Set The Tag ✅**
        ${link}`,
         })
      
} catch (err) {
      console.log(err)
  }
 }
}
