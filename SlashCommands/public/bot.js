const { MessageEmbed , Discord } = require('discord.js');
module.exports = {
  name:"bot",
  description:"bot information",

  run: async(client, interaction, args) => {
    try {
            let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;
      await interaction.reply({
    embeds: [
  new MessageEmbed()
    .setTitle(`__**Bot Information**__`)
    .setColor('#7800FF')
    .setDescription(` \`\`\`js
    
const Bot Version = "v4.1.0"

const Bot Name = "MegaBot"

const Servers = "${client.guilds.cache.size}"

const Commands = "98"

const Users = "${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}"

const Ping = "${client.ws.ping}"

const Node.js = "v16.0.0"

const Djs = "v13.10.3"

const Uptime = "${seconds}s ${minutes}m ${hours}h ${days}d"

< Easy , Safe = "100%" >

\`\`\`
  `)
      .setFooter({text: `requested by ${interaction.user.username}` , iconURL : interaction.user.displayAvatarURL({dynamic: true})})
    ]
});


} catch (err) {
      console.log(err)
  }
 }
}