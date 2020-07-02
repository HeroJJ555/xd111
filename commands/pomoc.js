const Discord = require("discord.js")

module.exports.run = async (_client, message) => {
    let pomocEmbed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle("POMOC")
    .setDescription("Wybierz dział:")
    .addField("🎠4FUN🎠 ", ">4fun")
    .addField("🦈ANIME🦈" , ">anime")
    .addField("🏆WYNIKI & OSIĄGNIĘCIA🏆" , ">wyniki")
    .addField("🚧BUGI, REPORTY I INNE🚧" , ">inne")
    .setFooter("Wysłano za pomocą McHeroesBot")


    message.channel.send(pomocEmbed)
}
module.exports.help = {
    name: "pomoc"
}