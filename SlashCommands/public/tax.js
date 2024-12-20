const { MessageEmbed , Discord , MessageActionRow, MessageButton, ButtonStyle} = require('discord.js');
module.exports = {
  name:"tax",
  description:"to get probot tax of ",
  options : [{
    name : "coast",
    description : "coast to get tax",
    type: 4,
    required : true,
  }],

  run: async(client, interaction, args) => {
    try {
      let args2 = interaction.options.getInteger('coast')

      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      let errorembed3 = new MessageEmbed()
      .setTitle(`**Error**`)
      .setColor("#780ff")
      .setDescription(`**It Must be a Number**`)
      .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL()})

      let errorembed2 = new MessageEmbed()
      .setTitle(`**Error**`)
      .setColor("780ff")
      .setDescription(`**Must Be A Number**`)
      .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL()})
      if (isNaN(args2)) return interaction.reply({embeds:[errorembed2]});
      let errorembed = new MessageEmbed()
      .setTitle(`**Error**`)
      .setColor("780ff")
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL()})
      if (args2 < 1) return interaction.reply({embeds:[errorembed]});
      let tax_embed = new MessageEmbed()
      .setColor("780ff")
      .setThumbnail(interaction.user.avatarURL())
      .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()})
      .setDescription(`> <a:yes:998236126953340988> ** __Your Tax Is : __${tax} ** <a:emoji_86:997869508259754035>`)
      .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL()})
      
      let mod_embed = new MessageEmbed()
      .setColor("780ff")
      .setThumbnail(interaction.user.avatarURL())
      .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()})
      .setDescription(`
      > <a:yes:998236126953340988> ** __Your Tax With Mediator Is : __${tax4} ** <a:emoji_86:997869508259754035>
      `)
      .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL({dynamic:true})})
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("👮")
        .setStyle('PRIMARY')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
);
        let m = await interaction.reply({ embeds: [tax_embed], components: [row] });
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === interaction.user.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ embeds:[mod_embed], components: [row2] })
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ embeds:[tax_embed], components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
      }); 
    } catch (err) {
      console.log(err)
  }
 }
}