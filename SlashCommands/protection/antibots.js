let db = require('pro.db')
module.exports = {
  name:"antibots-on",
  description:"to open antibots protection",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.set(`antibots_${interaction.guild.id}` , "True")
      interaction.reply(`> **Done Set The Anti Bots**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
