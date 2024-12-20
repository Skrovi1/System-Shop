let db = require('pro.db')
module.exports = {
  name:"antibots-off",
  description:"to close antibots protection",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`antibots_${interaction.guild.id}` , "True")
      interaction.reply(`> **Done delete the Anti Bots**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
