const { EmbedBuilder, Discord, PermissionsBitField } = require('discord.js');
module.exports = {
  name: "lock",
  description: "to lock a channel",

  run: async (client, interaction, args) => {
    try {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 You don't have permissions **`);

      if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

      let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
      interaction.channel.permissionOverwrites.edit(everyone, {
        SEND_MESSAGES : false
      }).then(() => {
        interaction.reply(`**✅  ${interaction.channel} Done Locked this room.**`)
      })

    } catch (err) {
      console.log(err)
    }
  }
}
