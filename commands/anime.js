const Discord = require("discord.js")

module.exports.run = async (_client, message) => {
    let pomocEmbed = new Discord.MessageEmbed()
    .setColor("#00ffee")
    .setTitle("POMOC")
    .setDescription("Dostępne komendy:")
    .addField(">neko", "Podstawowa komenda anime")
    .addField(">hentai" , "Anime hentai")
    .addField(">kitsune" , "KitSune")
    .addField(">gonewild" , "Brak Opisu")
    .setFooter("Wysłano za pomocą McHeroesBot")


    message.channel.send(pomocEmbed)
}
module.exports.help = {
    name: "anime"
}