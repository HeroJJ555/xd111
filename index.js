const Discord = require("discord.js")
var fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");

/////////////////////////////////////////////////////////////////////////////
///                        READER KOMEND                                  ///
/////////////////////////////////////////////////////////////////////////////



bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
     if (err){
         console.log(err);
     }  
     let jsFile = files.filter(f => f.split(".").pop()=== "js");

     if(jsFile.length <= 0) {
         console.log("Brak komendy! Sprawdź folder commands.");
     }

     jsFile.forEach((f) => {
        let props = require(`./commands/${f}`);
         bot.commands.set(props.help.name,props);
     });
});


/////////////////////////////////////////////////////////////////
///                    STATUS BOTA                            ///
/////////////////////////////////////////////////////////////////                           





bot.on('ready', () => {
    console.log('Bot został włączony');
    bot.user.setActivity("🚀Serwery:","🚀",{type: "PLAYING"});
});


bot.on('message', async message =>{
if(message.content ==="elo")return message.channel.send("ELUWA! :white_check_mark:");

////////////////////////////////////////////////////////////////////
///                       PREFIX I INNE                          ///
////////////////////////////////////////////////////////////////////


let prefix = config.prefix;
if(!message.content.startsWith(prefix))return;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if (commandfile){
    commandfile.run(bot,message,args);
}
    
});

bot.login(config.token);
