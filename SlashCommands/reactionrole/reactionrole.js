const { MessageEmbed , Discord , MessageActionRow, MessageButton, Util } = require('discord.js');
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"add",
  description:"to add reaction role",
  options: [{
    name:"channel",
    description:".",
    type:7,
    required:true,
  },{
    name:"messageid",
    description:"..",
    type:3,
    required:true,
  },{
    name:"role",
    description:".",
    type:8,
    required:true,
  },{
    name:"emoji",
    description:".",
    type:3,
    required:true,
  }],

  run: async(client, interaction, args) => {
    if(!interaction.member.permissions.has('ADMINSTRATOR')) return interaction.reply(`** 😕 You don't have permissions **`); 

    let yahya = interaction;
    let argss = ["",interaction.options.getChannel("channel") , interaction.options.getString("messageid") , interaction.options.getRole('role') , interaction.options.getString('emoji')]
      
    if (!argss[1]) return yahya.channel.send(`:x: | **Specify The ChannelID or mention The Channel**`);
if (!argss[2]) return yahya.channel.send(`:x: | **Specify The messageID**`);
if (!argss[3]) return yahya.channel.send(`:x: | **Specify The roleID or mention The Role**`);
if (!argss[4]) return yahya.channel.send(`:x: | **Specify The emoji**`);
    let channel = argss[1]
if (!channel) return yahya.channel.send(`:x: | **Channel Not Found**`);
let msg = await channel.messages.fetch(argss[2]);
if (!msg) return yahya.channel.send(`:x: | **Message Not Found**`);
let role = argss[3]
if (!role) return yahya.channel.send(`:x: | **Role Not Found**`);
let emoji = await Util.parseEmoji(argss[4]);
if (!emoji) return yahya.channel.send(":x: | **Specify a valid Emoji**");
if (emoji) {
  let checking = await client.emojis.cache.find(x => x.id === emoji.id);
  if (!checking) return yahya.channel.send(`:x: | **Invalid Emoji**`);
};
let pog = db.get(`reactions_${yahya.guild.id}_${msg.id}`)
if (pog && pog.find((x) => x.emoji == argss[4])) {
            let embed = new MessageEmbed()
            embed.setAuthor(yahya.guild.name, yahya.guild.iconURL())
            embed.setTitle("Error")
            embed.setDescription(`:x: | **The emoji is already being used in The message for reaction Roles!**`)
            embed.setFooter(yahya.user.tag, yahya.user.avatarURL({ dynamic: true }));
            embed.setTimestamp()
            embed.setThumbnail(yahya.user.avatarURL({ dynamic: true }))
            return yahya.channel.send({
              embeds: [embed]
            });
        }
await msg.react(argss[4])
db.push(`reactions_${yahya.guild.id}_${msg.id}`, {
emoji: argss[4],
roleId: role.id
});
      yahya.reply(`> **Done**`)
  }
}