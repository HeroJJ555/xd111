const Discord = require("discord.js")

module.exports.run = async (_client, message, args) => {

    let errEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("❌ Błąd składni!")
    .setDescription("Polecenie jest nie pełne! Podaj tekst ankiety!")
    .setFooter("Wysłano przez McHeroesBot")
    .setTimestamp();

    let permErrEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("❌ Brak Permisji!")
    .setDescription("Nie masz wystarczajacych permisji aby wykonać ta komendę!")
    .setFooter("Wysłano przez McHeroesBot")
    .setTimestamp();

    var x = message.channel
    let tresc = args.join(" ");

    if(!message.member.hasPermission(`MANAGE_MEMBERS`)) x.send(permErrEmbed);
    if(!tresc) x.send(errEmbed);

    let ankieta = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(`Ankieta`, `http://e-lgd-puszcza-bialowieska.pl/wp-content/uploads/2015/10/icon-ankieta.png`)
    .setDescription(tresc)
    .setFooter(`Wywołane przez: ${message.author}`)
    .setTimestamp();

    x.send(ankieta).then(async embedMessage =>{
        await embedMessage.react('✅')
        await embedMessage.react('❌')
    })


}
module.exports.help = {
    name: "ankieta"
}