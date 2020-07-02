const Discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (_client, message) => {
    var channel = message.channel;
    let {body} = await superagent
    .get('https://nekobot.xyz/api/image?type=neko').catch((err) => {
    channel.send("Błąd API!");
    return console.log(err);
    });

    try{
        let embed = new Discord.MessageEmbed()
        .setColor(body.color)
        .setImage(body.message)
        channel.send(embed)
    } catch(err){
        channel.send("Błąd bota sprawdź konsolę!")
        return console.log(err);
    }
}
module.exports.help = {
        name: "neko"
}