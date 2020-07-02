const Discord = require("discord.js")

module.exports.run = async (_client, message, args) => {
    let reklamaWyslana = new Discord.MessageEmbed()
    .setTitle("")
    .setColor("#00efff")
    .setDescription("Twoje zgłoszenie zostało wysłane! Prosimy o cierpliwość")

    let reklamaTresc = args.join(" ");
    let nazwa = message.guild.name
    let idnazwa = message.guild.id
    
    

    message.channel.send(reklamaWyslana)
    //_client.channels.cache.get('725438062913388574').send(reklamaSprawdz);
    
    message.channel.createInvite({ unique: true, temporary: false }).then(invite => {
        let reklamaSprawdz = new Discord.MessageEmbed()
    .setTitle("Report")
    .setDescription("Report:"+ reklamaTresc)
    .setFooter("Administracja proszona o sprawdzenie!")
        _client.channels.cache.get('727952971010146459').send(reklamaSprawdz);
    });
      

}
module.exports.help = {
    name: "report"
}