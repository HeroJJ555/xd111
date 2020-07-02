const Discord = require("discord.js")

module.exports.run = async (_client, message, args) => {
    
    let bUser = message.guild.member(message.mentions.members.first());
    
    let bUsErrEmbed = new Discord.MessageEmbed()
    .setAuthor("Bład!",message.author.iconURL)
    .setColor("#FF0000")
    .setDescription("Nie mozesz zbanować tego uzytkonwika, ponieważ nie ma go na serwerze lub ma za wysokie uprawnienia")
    .setThumbnail(message.guild.iconURL)
    .setFooter(":x: Błąd")
    .setTimestamp();

    
    let bPermErr = new Discord.MessageEmbed()
    .setAuthor(":x: Brak permisji", message.author.iconURL)
    .setColor("FF0000")
    .setDescription(":x: Brak uprawnienia `BAN_MEMBERS` do wykonania tej komendy", + bUser)
    .setTimestamp();


    if(!bUser) return message.channel.send(bUsErrEmbed);
    let bReason = args.join(" ").slice (22);
    
    if(!message.member.hasPermission("BAN_MEMBERS") ) return message.channel.send(bPermErr);
    if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(bUsErrEmbed);
    
    let bSucces = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("Banujący:", message.author.username, true)
    .addField("Zbanowany:", bUser, true)
    .addField("Powód bana:", bReason, true)
    .addField("Zbanowany o godzinie:", message.createdAt, false)
    .setTitle("Ban-Inforamcje")
    .setTimestamp();
    
    message.guild.member(bUser).ban(bReason);
    message.channel.send(bSucces);
    
}


    
module.exports.help ={
    name: "ban"
}