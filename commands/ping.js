//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Utility
//Purpose: Shows the ping

module.exports.run = async (bot, message, args) => {


    //usage
    if (args[0] == "help") {
        message.reply("Usage: ;ping");
        return;
    }

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);

    console.log('the command ping has been run')

}

module.exports.help = {
    name: 'ping',
    aliases: ['latency'],
    group: 'Utility',
    memberName: 'ping',
    description: 'Shows the latency of the bot API and the bot itself.',
    examples: ['ping'],

}