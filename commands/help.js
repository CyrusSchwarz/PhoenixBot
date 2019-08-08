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
            .setThumbnail('data:image/png;base64,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')
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