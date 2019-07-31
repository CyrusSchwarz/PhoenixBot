//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Utility
//Purpose: Gives the bot uptime, username, create date, and number of servers it's on

/*
 * todo
 * make embed look prettier
 * add more info to embed
 * eventually add nickname and name tracker
 * 
 * 
 * */


const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    //makes memberToFind the value that is equal to the user that is mentioned
    let memberToFind = message.mentions.members.first(); 

 


    //If all else is good, an embed is made with some info and sends it.
    try {
        let uicon = memberToFind.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
      
            .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
            .addField('Account Created', memberToFind.user.createdAt, true) //Shows when the user was registered
            .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true) //Shows when the user joined the guild
            .addField('User ID', memberToFind.id, true) //Shows the user ID
            .setThumbnail(uicon)

            .setColor(0x81ff14) //Make the embed cyrusgreen
            .setFooter('Searched User') //Add a footer
            .setTimestamp() //Timestamp the footer

        message.channel.send(embed);
        return;

    } catch(e) {
  
        let embed = new Discord.RichEmbed()
           
            .setTitle('Error!') //Shows when the user was registered
            .addField('Member not found :(', "Make sure that you're mentioning someone in the server.")
            .setColor(0x81ff14) //Make the embed red
            .setFooter('Error Found') //Add a footer
            .setTimestamp() //Timestamp the footer
        message.channel.send(embed); 
        return;

    }
}


module.exports.help = {
    name: "whois"
}

