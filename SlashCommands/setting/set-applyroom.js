const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-applyroom",
  description:"to set a apply room",
  options : [{
    name : "channel",
    description: "channel to set apply",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getChannel('channel')

   let chid = link.id;
      db.set(`applyroom_${interaction.guild.id}` , chid)
      interaction.reply(`> **Done Set The Apply Room To ${link} **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
