//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Utility
//Purpose: Gives the bot uptime, username, create date, and number of servers it's on

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: ;botinfo");
        return;
    }

    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
   

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#81ff14")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Server Count", bot.guilds.size)
        .addField("Uptime", uptime)

    message.channel.send(botembed);

    console.log('the command botinfo has been run')
}

module.exports.help = {
    name: "botinfo"
}