const Discord = require("discord.js")

module.exports.run = async (_client, message) => {
    const InfoEmbed = new Discord.MessageEmbed()
    .setColor("#67FA0E")
    //.setAuthor("Informacje o serwerze" ,message.guild.name,message)
    .addField("Utworzony:", message.guild.createdAt, true)
    .addField("Właściciel:", message.guild.owner, true)
    .addField("Członkowie:", message.guild.memberCount, true)
    .setDescription("Informacje o serwerze")
    .setTimestamp();

    message.channel.send(InfoEmbed);
   
}
module.exports.help = {
    name: "server-info"
}