const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name:"filter",
  description:"to filter a seller",
  options: [{
    name : "user",
    description: "user to give him role",
    type: 6,
    required: true
  } , {
    name : "reason",
    description: "filter reason",
    type: 3,
    required: true
  }],
/////////////////////////////////////////////////
  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getString("reason")
      user.setNickname(`${user.user.username}`)
      user.roles.cache.forEach(role => {
        user.roles.remove(role)
      })
     let welcomeseller = db.get(`filter_${interaction.guild.id}`)
      if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permissions **`);

          user.send({embeds: [
      new MessageEmbed()
      .setTitle(`> **Hello Its The System Bot Of ${interaction.guild.name}**`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter({text: `Filtered From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setAuthor({name: `Filtered From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setDescription(`
** 
> \`#-\` Hello ${user} , You Have Been Filtered At ${interaction.guild.name} Team 🎉

> \`?-\` The Admin : ${interaction.user.tag} <a:heart_13:1032657529412526130>

> \`%-\` Reason : ${role}  <a:flower:1032658526683811931>

Thanks For Time You Made With ${interaction.guild.name} <a:Yred:1032658857673117737>
**
`)
    ]})
  client.channels.cache.get(welcomeseller).send({ content: `
\`\`\` Message Has Been Filtered \`\`\` 
**

> \`&-\` Seller : ${user} 🎉


> \`?-\` Reason : ${role} <a:heart_13:1032657529412526130>


> Thanks For Your Time With ${interaction.guild.name} <a:Yred:1032658857673117737>
**
`})
  interaction.reply("> **Done**")
} catch (err) {
      console.log(err)
  }
 }
}
