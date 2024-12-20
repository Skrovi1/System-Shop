const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name:"warn",
  description:"to warn a seller",
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
  }, {
    name : "reason",
    description: "filter reason",
    type: 3,
    required: true
  }, {
    name : "time",
    description: "time of role",
    type: 3,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getRole("role")
      let reason = interaction.options.getString("reason")
       let time = interaction.options.getString("time")
      if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permissions **`);
      
        if (user.id === interaction.user.id) return interaction.reply("لا يمكن اعطاء رتبه لنفسك")
        if (user.id === client.user.id) return interaction.reply("لا يمكن اعطاء رتبه للبوت")
      
           
    user.send({embeds: [
      new MessageEmbed()
      .setTitle(`> **Hello Its The System Bot Of ${interaction.guild.name}**`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter({text: `Warn From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dnynamic: true}) })
      .setAuthor({name: `Warn From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setDescription(`
** 
> \`#-\` Hello ${user} , You Have Got {${role.name}} 🎉


> \`?-\` The Admin : ${interaction.user.tag} <a:heart_13:1032657529412526130>


> \`%-\` Reason : {${reason}} <a:flower:1032658526683811931>


Please Don't Do It Again <a:Yred:1032658857673117737>
**
`)
    ]})
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
