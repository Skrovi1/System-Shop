const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name:"upgrade",
  description:"to upgrade a seller",
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
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getRole("role")
      let upgraderoom = db.get(`upgrade_${interaction.guild.id}`)
      if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permissions **`);
      
        if (user.id === interaction.user.id) return interaction.reply("لا يمكن اعطاء رتبه لنفسك")
        if (user.id === client.user.id) return interaction.reply("لا يمكن اعطاء رتبه للبوت")
      
               user.roles.add(role)
    user.send({embeds: [
      new MessageEmbed()
      .setTitle(`> **Hello Its The System Bot Of ${interaction.guild.name}**`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter({text: `Upgraded From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setAuthor({name: `Upgraded From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setDescription(`
** 
> \`#-\` Hello ${user} , You Have Reached {${role.name}} 🎉

> \`?-\` The Admin : ${interaction.user.tag} <a:heart_13:1032657529412526130>

> \`%-\` Thanks Fot Activating In ${interaction.guild.name} <a:flower:1032658526683811931>

Keep Going <a:Yred:1032658857673117737>
**
`)
    ]})
  client.channels.cache.get(upgraderoom).send({ content: `
\`\`\` Message Has Been Promoted \`\`\` 
**

> \`&-\` Seller : ${user} <a:heart_13:1032657529412526130>


> \`?-\` Role : ${role} <a:flower:1032658526683811931>


> \`#-\` Thanks Fot Activating In ${interaction.guild.name} <a:Yred:1032658857673117737>


> Keep Going 🎉
**
`})
  interaction.reply("> **Done**")
} catch (err) {
      console.log(err)
  }
 }
}
