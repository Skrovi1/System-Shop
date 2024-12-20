const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-transcripts",
  description:"to set a transcripts room",
  options : [{
    name : "channel",
    description: "channel to set log",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getChannel('channel')

   let chid = link.id;
      db.set(`logt_${interaction.guild.id}` , chid)
      interaction.reply(`> **Done Set The Transcripts Room To ${link} **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
