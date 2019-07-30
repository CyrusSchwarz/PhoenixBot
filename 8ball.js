//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Fun
//Purpose: 8ball


/* TODO
 * make it so that there's not a new line every space
 * 
 * */


const Discord = require("discord.js");

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}



module.exports.run = async (bot, message, args) => {

        //var rnd = randomIntInc(1, 5);
    var rnd = 1;
    if (rnd === 1) {

        let botembed = new Discord.RichEmbed()
            
            .addField('Your Question', args) //Displays the user's question
            .addField('My answer', 'lolno') //Gives answer
         
        

            .setColor(0x81ff14) //Make the embed cyrusgreen
            .setFooter('Searched User') //Add a footer
            .setTimestamp() //Timestamp the footer
        message.channel.send(botembed);
    }

       
    if (rnd === 2) {

        let botembed = new Discord.RichEmbed()
            .setDescription("the AI knows all")
            .setColor("#81ff14")
            .setField(args , true)
            .setField('wtf')
            .setTimestamp()
        message.channel.send(botembed);
    }

    if (rnd === 3) {

        let botembed = new Discord.RichEmbed()
            .setDescription("the AI knows all")
            .setColor("#81ff14")
            .setField(args , true)
            .setField('absolutely')
            .setTimestamp()
        message.channel.send(botembed);
    }
    if (rnd === 4) {

        let botembed = new Discord.RichEmbed()
            .setDescription("the AI knows all")
            .setColor("#81ff14")
            .setField(args , true)
            .setField('no?')
            .setTimestamp()
        message.channel.send(botembed);
    }

    if (rnd === 5) {

        let botembed = new Discord.RichEmbed()
            .setDescription("the AI knows all")
            .setColor("#81ff14")
            .setField(args , true)
            .setField('okay and')
            .setTimestamp()
        message.channel.send(botembed);
    }
    
};

module.exports.help = {
    name: '8ball'
}