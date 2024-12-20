const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require("pro.db")
module.exports = {
  name:"sellerinfo",
  description:"to see seller info",

  run: async(client, interaction, args) => {
    try {
      let team = db.get(`teamrole_${interaction.guild.id}`)
      if(!interaction.member.roles.cache.has(team)) return interaction.reply("You Cant Use This Command")

   let feedbacks = db.get(`feeed_${interaction.guild.id}_${interaction.user.id}`)
      console.log(feedbacks)
      if(feedbacks == null) feedbacks = 0
         let offers = db.get(`offer_${interaction.guild.id}_${interaction.user.id}`)
      if(offers == null) offers = 0

     
               let responds = db.get(`respond_${interaction.guild.id}_${interaction.user.id}`)
      if(responds == null) responds = 0

      interaction.reply(`
> You Have ${feedbacks} Feedback !

> You Made ${offers} Offer!

> You Responded To ${responds} Tickets! `)
} catch (err) {
      console.log(err)
  }
 }
}
