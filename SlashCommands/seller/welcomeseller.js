const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name:"welcomeseller",
  description:"to welcome a seller",
  options: [{
    name : "user",
    description: "user to give him role",
    type: 6,
    required: true
  } , {
    name : "roles",
    description: "sell roles",
    type: 3,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getString("roles")
     let welcomeseller = db.get(`welcomeseller_${interaction.guild.id}`)
      if (!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permissions **`);

          user.send({embeds: [
      new MessageEmbed()
      .setTitle(`> **Hello Its The System Bot Of ${interaction.guild.name}**`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter({text: `Approved From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setAuthor({name: `Approved From : ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true}) })
      .setDescription(`
** 
> \`#-\` Hello ${user} , You Have Been Approved At ${interaction.guild.name} Team 🎉

> \`?-\` The Admin : ${interaction.user.tag} <a:heart_13:1032657529412526130>

> \`%-\` Sell Roles : ${role}  <a:flower:1032658526683811931>

Thanks For Beeing A Seller In ${interaction.guild.name} <a:Yred:1032658857673117737>
**
`)
    ]})
  client.channels.cache.get(welcomeseller).send({ content: `
\`\`\` Message Has Been Approved \`\`\` 
**

> \`&-\` Seller : ${user} 🎉


> \`?-\` Sell Roles : ${role} <a:heart_13:1032657529412526130>


> \`#-\` Please Read The Rules Well To Dont Take Warns  <a:flower:1032658526683811931>


> Thanks For Beeing A Seller In ${interaction.guild.name} <a:Yred:1032658857673117737>
**
`})
  interaction.reply("> **Done**")
} catch (err) {
      console.log(err)
  }
 }
}
