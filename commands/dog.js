//Author: Cyrus Schwarz
//Date: 7/31/19
//Category: Fun
//Purpose: Gives a random picture of a dog

const Discord = require("discord.js");
const { get } = require("snekfetch"); 

module.exports.run = async (bot, message, args) => {


    var fortunes = [
        "`Absolutely`",
        "`lolno`",
        "`wtf`",
        "`ok and`",
        "`Yes`",
        "`No`",
        "`uh`",
        "`what`"
    ];




    try {
        get('https://random.dog/woof.json').then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor(0x81ff14) //Make the embed cyrusgreen
                .setFooter('a random dog lol') //Add a footer
                .setTimestamp() //Timestamp the footer
            return message.channel.send({ embed });
        });
    } catch (err) {
        return message.channel.send(err.stack);
    }
};



module.exports.help = {
    name: 'dog'
}