const Discord = require("discord.js")

module.exports.run = async (_client, message) => {
    let afkUSER = message.author.username
    let afKEmbed = new Discord.MessageEmbed()
    .setColor("#00fffe")
    .setTitle("AFK")
    .setDescription(afkUSER+ " Jest teraz **AFK**")
    .setFooter("Wysłano za pomocą McHeroesBot")
    .setImage("https://th.bing.com/th/id/OIP.ythzLFBowPkLLA5x3XmmiwAAAA?pid=Api&rs=1")
    .setTimestamp();

    message.channel.send(afKEmbed)

}
module.exports.help = {
    name: "afk"
}