let { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"azkar-setup",
  description:"to setup a azkar",
  options : [{
    name : "channel",
    description: "channel of azkar",
    type: 7,
    required: true,
  } , {
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
  } , {
    name:"time",
    description:"time",
    type:3,
    required:true,
  }],

  run: async(client, interaction, args) => {
            if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({
      content: "**🥺 You Don't Have Permissions**"
    });
    let channel = interaction.options.getChannel("channel");
    let type = interaction.options.getString("type");
    let time = interaction.options.getString("time");
    await db.set(`azkar_${interaction.guild.id}` , {
      channel:channel.id,
      type:type,
      time:ms(time)
    })
    interaction.reply({embeds:[
      new MessageEmbed().setDescription("Done")
    ]})
  }
}