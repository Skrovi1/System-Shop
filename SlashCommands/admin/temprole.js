const { MessageEmbed } = require('discord.js');
let ms = require('ms')
module.exports = {
  name:"temp-role",
  description:"to give someone a temp role",
  options: [{
    name : "user",
    description: "user to give him role",
    type: 6,
    required: true
  } , {
    name : "role",
    description: "role to give user",
    type: 8,
    required: true
  } , {
    name : "time",
    description: "time of role",
    type: 3,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getRole("role")
      let time = interaction.options.getString("time")
      
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 You don't have permissions **`);
        if (user.id === interaction.user.id) return interaction.reply("لا يمكن اعطاء رتبه لنفسك")
        if (user.id === client.user.id) return interaction.reply("لا يمكن اعطاء رتبه للبوت")
      
               user.roles.add(role)
      interaction.reply({  content : `> ** Done Gived ${user} , Role ${role} , For ${ms(ms(time))}.**`});
        setTimeout(() => {
            user.roles.remove(role)
        }, ms(time))
} catch (err) {
      console.log(err)
  }
 }
}
