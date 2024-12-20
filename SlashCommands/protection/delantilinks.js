let db = require('pro.db')
module.exports = {
  name:"antilinks-off",
  description:"to close antilinks protection",

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.delete(`antilinks_${interaction.guild.id}` , "True")
      interaction.reply(`> **Done delete the Antilink Protection **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
