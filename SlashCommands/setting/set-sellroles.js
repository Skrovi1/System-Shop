const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-sellroles",
  description:"to set sellroles",
  options : [{
    name : "netflix",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "design",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "insta",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "nitro",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "visa",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "bot",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "uc",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "vote",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "boost",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "spotify",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "shahid",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "credit",
    description: ".",
    type: 	8,
    required: true,
  },{
    name : "tiktok",
    description: ".",
    type: 	8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let r1 = interaction.options.getRole("netflix")
      let r2 = interaction.options.getRole("design")
      let r3 = interaction.options.getRole("insta")
      let r4 = interaction.options.getRole("nitro")
      let r5 = interaction.options.getRole("visa")
      let r6 = interaction.options.getRole("bot")
      let r7 = interaction.options.getRole("uc")
      let r8 = interaction.options.getRole("vote")
      let r9 = interaction.options.getRole("boost")
      let r10 = interaction.options.getRole("spotify")
      let r11 = interaction.options.getRole("shahid")
      let r12 = interaction.options.getRole("credit")
      let r13 = interaction.options.getRole("tiktok")

      db.set(`sellroles_${interaction.guild.id}` , {
        netflix:r1.id,
        design:r2.id,
        insta:r3.id,
        nitro:r4.id,
        visa:r5.id,
        bot:r6.id,
        uc:r7.id,
        vote:r8.id,
        boost:r9.id,
        spotify:r10.id,
        shahid:r11.id,
        credit:r12.id,
        tiktok:r13.id
      })
      interaction.reply(`> **Done Set Sell Roles**`)
} catch (err) {
      console.log(err)
  }
 }
}
