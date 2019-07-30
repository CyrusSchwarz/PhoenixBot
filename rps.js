//Author: Cyrus Schwarz
//Date: 7/28/19
//Category: Fun
//Purpose: Rock paper scissors

/* Todo
 * make it use the new richembed
 * 
 * */


const Discord = require("discord.js");

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

module.exports.run = async (bot, message, args) => {

    let key = {
        scissors: 'paper',
        paper: 'rock',
        rock: 'scissors',
    };


    let rng = randomIntInc(1, 3);

    let replies = ['rock', 'paper', 'scissors'];
    let result = Object.keys(key)[Math.floor(Math.random() * 3)];
    

  

    // get reply...
    let userReply = args[0];


    // check if it's valid


    if (!replies.includes(userReply)) {

        message.channel.send({
            embed: {
                color: 0x81ff14,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Invalid Input - Please play with these responses!",

                fields: [{
                    name: ":one:",
                    value: "Rock"
                },
                {
                    name: ":two:",
                    value: "Paper"
 
                },
                {
                    name: ":three:",
                    value: "Scissors"

                }
                ],
            }
        })


    }


  
    
    

  




    if (result === userReply) {

        message.channel.send({
            embed: {
                color: 0xffffff,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Result",

                fields: [{
                    name: "Tie!",
                    value: "It seems like man and machine are equal for now."
                }]
            }
        })

    } else if (userReply === 'rock') {
        if (result === 'paper') {

            message.channel.send({
                embed: {
                    color: 0xFF0000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Loss!",
                        value: "Your skinsuit is now mine."
                    }]
                }
            })

        }

        else {

            message.channel.send({
                embed: {
                    color: 0x008000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Win!",
                        value: "You get to keep your skinsuit for now."
                    }]
                }
            })




        }
    } else if (userReply === 'scissors') {
        if (result === 'rock') {

            message.channel.send({
                embed: {
                    color: 0xFF0000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Loss!",
                        value: "Your skinsuit is now mine."
                    }]
                }
            })

        }

        else {

            message.channel.send({
                embed: {
                    color: 0x008000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Win!",
                        value: "You get to keep your skinsuit for now."
                    }]
                }
            })




        }




    } else if (userReply === 'paper') {
        if (result === 'scissors') {

            message.channel.send({
                embed: {
                    color: 0xFF0000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Loss!",
                        value: "Your skinsuit is now mine."
                    }]
                }
            })

        }

        else {

            message.channel.send({
                embed: {
                    color: 0x008000,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Result",

                    fields: [{
                        name: "Win!",
                        value: "You get to keep your skinsuit for now."
                    }]
                }
            })




        }
    }
    

}








module.exports.help = {
    name: 'rps'
}