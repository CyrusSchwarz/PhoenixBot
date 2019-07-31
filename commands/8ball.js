//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Fun
//Purpose: 8ball


/* TODO
 * 
 * 
 * */




const Discord = require("discord.js");



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




    let answer = fortunes[~~(Math.random() * fortunes.length)];
    let botembed = new Discord.RichEmbed()
        .setColor("#81ff14")
        .setTitle('8ball')
        .setThumbnail('http://www.myiconfinder.com/uploads/iconsets/256-256-7a291c57d6ee238eb87c9515e5f99bf9.png')
        .addField('Your question', args.join(" "))
        .addField('My Answer', answer)
        .setTimestamp()
        .setFooter('8ball');
    message.channel.send(botembed);
};



module.exports.help = {
    name: '8ball'
}