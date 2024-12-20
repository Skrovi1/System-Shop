let { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"azkar-type",
  description:"to setup a azkar",
  options : [ {
    name:"type",
    description:"embed/message",
    type:3,
    choices:[{
      name:"embed",
      value:"embed",
      description:"embedmsg"
    } , {
      name:"message",
      value:"message",
      description:"message"
    }],
    required:true
  }],

  run: async(client, interaction, args) => {
           if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });
    let dbx = db.get(`azkar_${interaction.guild.id}`)
    if(dbx == null) interaction.reply(`> **Azkar Is Already Disabled**`)
    
    let type = interaction.options.getString("type");
    await db.set(`azkar_${interaction.guild.id}` , {
      channel:dbx.channel,
      type:type,
      time:dbx.time
    })
    interaction.reply({embeds:[
      new MessageEmbed().setDescription("Done")
    ]})
  }
}