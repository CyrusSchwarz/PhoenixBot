//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Fun
//Purpose: 8ball

const Discord = require("discord.js");

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}



module.exports.run = async (bot, message, args) => {

        var rnd = randomIntInc(1, 5);
        
    if (rnd === 1) {

        const embed = new Discord.RichEmbed()
            .setTitle("lol no")
            .setColor(0x81ff14)
            .setDescription(args)
            .setTimestamp()
        message.channel.send({ embed });

    }

       
    if (rnd === 2) {

        const embed = new Discord.RichEmbed()
            .setTitle("wtf")
            .setColor(0x81ff14)
            .setDescription(args)
            .setTimestamp()
        message.channel.send({ embed });
    }

    if (rnd === 3) {

        const embed = new Discord.RichEmbed()
            .setTitle("absolutely")
            .setColor(0x81ff14)
            .setDescription(args)
            .setTimestamp()
        message.channel.send({ embed });
    }
    if (rnd === 4) {

        const embed = new Discord.RichEmbed()
            .setTitle("no?")
            .setColor(0x81ff14)
            .setDescription(args)
            .setTimestamp()
        message.channel.send({ embed });
    }

    if (rnd === 5) {

        const embed = new Discord.RichEmbed()
            .setTitle("im not sure")
            .setColor(0x81ff14)
            .setDescription(args)
            .setTimestamp()
        message.channel.send({ embed });
    }
    
};

module.exports.help = {
    name: '8ball'
}