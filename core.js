const fs = require('fs');
const Discord = require('discord.js')
const config = require("./config.json");
const token = require("./token.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});


//Basic bot stuff
//Says that the bot has logged on in the console
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    // List servers the bot is connected to
    console.log("Servers:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
});

//Says says the bot has been initialized in the server.
bot.on('ready', () => {
    var generalChannel = bot.channels.get("563847744930709504") // Replace with known channel ID
    bot.user.setActivity(bot.guilds.size + " servers in Cyrus's basement | Do ;help for help", { type: "WATCHING" });
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;


    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (commandfile) commandfile.run(bot, message, args);



});

bot.login(token.token);