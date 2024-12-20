let { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"azkar-time",
  description:"to setup a azkar",
  options : [{
    name:"time",
    description:"time",
    type:3,
    required:true,
  }],

  run: async(client, interaction, args) => {
           if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });
    let dbx = db.get(`azkar_${interaction.guild.id}`)
    if(dbx == null) interaction.reply(`> **Azkar Is Already Disabled**`)
    
    let type = interaction.options.getString("time");
    await db.set(`azkar_${interaction.guild.id}` , {
      channel:dbx.channel,
      type:dbx.type,
      time:ms(type)
    })
    interaction.reply({embeds:[
      new MessageEmbed().setDescription("Done")
    ]})
  }
}