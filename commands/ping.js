//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Utility
//Purpose: Shows the ping

module.exports.run = async (bot, message, args) => {

    const Discord = require("discord.js");

    //usage
    if (args[0] == "help") {
        message.reply("Usage: ;ping");
        return;
    }

    const m = await message.channel.send("Ping?");
    m.delete;
    m.edit(`Pong`);


    //creates variables based on the message that was sent and when it was edited

    var latency = m.createdTimestamp - message.createdTimestamp;
    var apilatency = Math.round(bot.ping);

    //creates an embed that uses those variables I just created

    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Ping")
        .setColor("#81ff14")
        .addField("API Time (ms)", apilatency)
        .addField("Latency (ms)", latency)
     


    m.edit(botembed);
    

   

}

module.exports.help = {
    name: 'ping',
    aliases: ['latency'],
    group: 'Utility',
    memberName: 'ping',
    description: 'Shows the latency of the bot API and the bot itself.',
    examples: ['ping'],

}

       