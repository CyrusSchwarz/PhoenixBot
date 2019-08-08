//Author: Cyrus Schwarz
//Date: 8/8/19
//Category: Utility
//Purpose: A simple help command. Will rewrite this once I figure out how to do it more dynamically


/* TODO
 * Write this in a more dynamic way
 * 
 * */




const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {


    let array = message.content.split(" ");



    //cuts out the command and user from the array, then joins the rest together for a kick reason
    array = array.slice(0, 0).concat(array.slice(0 + 1, array.length));


    harg = array[0] 

    console.log(harg)

    if(harg == null) {

        let botembed = new Discord.RichEmbed()

            .setTitle('Command Categories')
            .setColor(0x81ff14)
            .addField('Administration',"No commands yet")
            .addField('Fun', "8ball, cat, dog, howlame, rps")
            .addField('Utility', "whois, serverinfo, botinfo, ping")
            .addField('Command Usage', "help <commandname>")
            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);

        return;

    } 

    if (harg == "8ball") {

        let botembed = new Discord.RichEmbed()

            .setTitle('8ball')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you your totally accurate fortune")
            .addField('Command usage', "`8ball <question>`")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "cat") {

        let botembed = new Discord.RichEmbed()

            .setTitle('cat')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you a random picture of a cat")
            .addField('Command usage', "`cat`")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "dog") {

        let botembed = new Discord.RichEmbed()

            .setTitle('dog')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you a random picture of a dog")
            .addField('Command usage', "`dog`")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "howlame") {

        let botembed = new Discord.RichEmbed()

            .setTitle('howlame')
            .setColor(0x81ff14)
            .addField('Command Description', "accurately tells you how lame you or someone else is")
            .addField('Command usage', "`howlame <mention>` or `howlame` ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "rps") {

        let botembed = new Discord.RichEmbed()

            .setTitle('cat')
            .setColor(0x81ff14)
            .addField('Command Description', "simple rock paper scissors command")
            .addField('Command usage', "`howlame <rock, paper, or scissors>` or `rps` for list of inputs ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "whois") {

        let botembed = new Discord.RichEmbed()

            .setTitle('whois')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you information about a user")
            .addField('Command usage', "`whois <mention>` ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "serverinfo") {

        let botembed = new Discord.RichEmbed()

            .setTitle('serverinfo')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you information about the server")
            .addField('Command usage', "`serverinfo` ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "botinfo") {

        let botembed = new Discord.RichEmbed()

            .setTitle('botinfo')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you information about the bot")
            .addField('Command usage', "`botinfo` ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    if (harg == "ping") {

        let botembed = new Discord.RichEmbed()

            .setTitle('botinfo')
            .setColor(0x81ff14)
            .addField('Command Description', "Gives you the ping of the bot")
            .addField('Command usage', "`ping` ")


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

    }
    let botembed = new Discord.RichEmbed()

            .setTitle('Error')
            .setColor(0xff0000)
            .addField('Error!', "Command not found. Do `help` for a list of commands")
        


            .setTimestamp()

            .setFooter('Help');
        message.channel.send(botembed);
        return;

  
};



module.exports.help = {
    name: 'help'
}