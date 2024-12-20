const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-orderroom",
  description:"to set a order room",
  options : [{
    name : "channel",
    description: "channel to set order",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getChannel('channel')

   let chid = link.id;
      db.set(`orderroom_${interaction.guild.id}` , chid)
      interaction.reply(`> **Done Set The Order Room To ${link} **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
