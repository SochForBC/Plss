
const client = require('../index.js');

const Discord = require('discord.js');
const mongoose = require('mongoose');
const {loadCommands, commands, moderation,
    others,
    general, configuration, } = require('../utils/loadCommands');
const used = new Map();
//const ownres555 = require('../index')
const duration = require("humanize-duration");
const owners = ["503665035696930829", "527826654660132890", "352460871856947200", "665309785544982531", "609544947816988702", "505442667652448277", "732158721257635932", "315100220520267776", "795765805061111848", "765621344586825728" , "734355052075941938" ,  ]

client.on('message', async message => {
   // console.log(ownres555)
 // if(client.ownres.includes(message.author.id))
    if (message.author.bot) return;
    if(!owners.includes(message.author.id) ) return
//if(!ownres.includes(message.author.id)) 
    //Getting the data from the model
   
    const messageArray = message.content.split(/ +/);
    const cmd = messageArray[0].toLocaleLowerCase()
    const args = messageArray.slice(0);
    

        const prefix = "-";
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        if(commandfile) {
            commandfile.run(client, message, args, prefix, commands);
        }
        
    
})
