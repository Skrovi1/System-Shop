let { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"azkar-disable",
  description:"to disanle a azkar",

  run: async(client, interaction, args) => {
            if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });
    let dbx = db.get(`azkar_${interaction.guild.id}`)
    if(dbx == null) interaction.reply(`> **Azkar Is Already Disabled**`)
    await db.delete(`azkar_${interaction.guild.id}`)
    interaction.reply({embeds:[
      new MessageEmbed().setDescription("Done")
    ]})
  }
}