//Author: Cyrus Schwarz
//Date: 8/2/19
//Category: Fun
//Purpose: tells you how lame you are lol


/* TODO
 * 
 * 
 * */




const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {


    var percentages = [
        "`0%`",
        "`10%`",
        "`20%`",
        "`25%`",
        "`50%`",
        "`60%`",
        "`69%`",
        "`75%`",
        "`99.9%`",
        "`100%`"
    ];



    if (args[0]) {
        let answer = percentages[~~(Math.random() * percentages.length)];
        let botembed = new Discord.RichEmbed()
            .setColor("#81ff14")
            .setTitle('howlame')
            .setThumbnail('http://truestar.life/wp-content/uploads/2016/07/lame.png')
            .addField('AI lame rating', args + ' is' + answer + ' lame')
            .setTimestamp()
            .setFooter('howlame');
        message.channel.send(botembed);
    } else {
        let answer = percentages[~~(Math.random() * percentages.length)];
        let botembed = new Discord.RichEmbed()
            .setColor("#81ff14")
            .setTitle('howlame')
            .setThumbnail('http://truestar.life/wp-content/uploads/2016/07/lame.png')
            .addField('AI lame rating', 'You are ' + answer + ' lame')
            .setTimestamp()
            .setFooter('howlame');
        message.channel.send(botembed);


    }

};



module.exports.help = {
    name: 'howlame'
}