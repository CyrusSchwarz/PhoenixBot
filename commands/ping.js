//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Utility

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);

    console.log('the command ping has been run')

}

module.exports.help = {
    name: "ping"
}