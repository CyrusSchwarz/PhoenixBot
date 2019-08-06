//Author: Cyrus Schwarz
//Date: 8/5/19
//Category: Utility
//Purpose: Anonymous messaging and suggestions


/* TODO
 * Add blocking functionality
 * Add individual user messaging functionality
 * 
 * */




const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    if (message.channel.type == "dm") {


        //makes an array out of the input
        let array = message.content.split(" ");
        channel = array[1];


        //This makes it so that all usage of the bot is anonymous unless otherwise specified
        anonymous = true;


        //this cuts off the command itself and the channel ID from the array
        array = array.slice(0, 0).concat(array.slice(0 + 1, array.length));
        array = array.slice(0, 0).concat(array.slice(0 + 1, array.length));

        //If the non-anon flag is used, it sets the anonymous boolean to false and chops off the flag from the message
        if (array[0] == "-a") anonymous = false;
        if (anonymous == false) array = array.slice(0, 0).concat(array.slice(0 + 1, array.length)); 

        //This joins the array into a single string and names it "suggestion"
        suggestion = array.join(" ");




        //if the anon flag was changed this code runs
        if (anonymous == false) {

            suggestor = message.author.username;
            suggestorpfp = message.author.displayAvatarURL;

            let botembed = new Discord.RichEmbed()
                .setDescription("Voltaire")
                .setColor("#81ff14")
                .setThumbnail(suggestorpfp)
                .addField("Suggestor", suggestor)
                .addField("Message", suggestion)

            bot.channels.get(channel).send(botembed);
        //if the anon flag was never changed this code runs    
        } else {

            let botembed = new Discord.RichEmbed()
                .setDescription("Voltaire")
                .setColor("#81ff14")
                .setThumbnail('https://res.cloudinary.com/teepublic/image/private/s--q8sRzadz--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1546348312/production/designs/3860380_0.jpg')
                .addField("Suggestor", "Anon")
                    .addField("Message", suggestion)

            bot.channels.get(channel).send(botembed);

            


        }



        return;

        

    }

    /*

    mention = message.mentions.users.first();
    if (mention == null) return message.channel.send('You need to mention someone');

    args.shift(); // args = ['Hello!']
    mention.send(args.join(' '));

    message.channel.send("sent");

*/

      

   
};



module.exports.help = {
    name: 'voltaire'
}