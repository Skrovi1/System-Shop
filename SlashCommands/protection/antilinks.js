let db = require('pro.db')
module.exports = {
  name:"antilinks-on",
  description:"to open antilinks protection",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.set(`antilinks_${interaction.guild.id}` , "True")
      interaction.reply(`> **Done Set The Anti Links **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
