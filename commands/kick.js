const Discord = require("discord.js")

module.exports.run = async (_client, message, args) => {
    
    let bUser = message.guild.member(message.mentions.members.first());
    
    let bUsErrEmbed = new Discord.MessageEmbed()
    .setAuthor("Bład!",message.author.iconURL)
    .setColor("#FF0000")
    .setDescription("Nie mozesz wyrzucić tego uzytkonwika, ponieważ nie ma go na serwerze lub ma za wysokie uprawnienia")
    .setThumbnail(message.guild.iconURL)
    .setFooter("Błąd")
    .setTimestamp();

    
    let bPermErr = new Discord.MessageEmbed()
    .setAuthor(":x: Brak permisji", message.author.iconURL)
    .setColor("FF0000")
    .setDescription(":x: Brak uprawnienia `KICK_MEMBERS` do wykonania tej komendy", + bUser)
    .setTimestamp();


    if(!bUser) return message.channel.send(bUsErrEmbed);
    let bReason = args.join(" ").slice (22);
    
    if(!message.member.hasPermission("KICK_MEMBERS") ) return message.channel.send(bPermErr);
    if (bUser.hasPermission("KICK_MEMBERS")) return message.channel.send(bUsErrEmbed);
    
    let bSucces = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("Wyrzucający:", message.author.username, true)
    .addField("Wyrzucony:", bUser, true)
    .addField("Powód wyrzucenia:", bReason, true)
    .addField("Wyrzucony o godzinie:", message.createdAt, false)
    .setTitle("Kick-Inforamcje")
    .setTimestamp();
    
    message.guild.member(bUser).kick(bReason);
    message.channel.send(bSucces);
    
}


    
module.exports.help ={
    name: "kick"
}