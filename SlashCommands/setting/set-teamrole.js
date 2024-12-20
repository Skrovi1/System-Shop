const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-teamrole",
  description:"to set the teamrole",
  options : [{
    name : "role",
    description: ".",
    type: 	8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let r1 = interaction.options.getRole("role")

      db.set(`teamrole_${interaction.guild.id}` , r1.id)
      interaction.reply(`> **Done Set Team Roles**`)
} catch (err) {
      console.log(err)
  }
 }
}
