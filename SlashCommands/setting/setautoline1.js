const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-autoline",
  description:"to set a autoline channel",
  options : [{
    name : "channel",
    description: "channel you want to set it",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
      let channel = interaction.options.getChannel('channel')
      let chid = channel.id;

      db.push(`Auto_Line_${interaction.guild.id}` , chid)
      interaction.reply(`> **Done Set ${channel} To The AutoLine Channel **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
