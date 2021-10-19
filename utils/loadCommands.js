const fs = require('fs');
const Client = require('discord.js');
const { UV_FS_O_FILEMAP } = require('constants');
const { dir } = require('console');
const general  = []
const configuration = []
const moderation = []
const others = [];
const commands = []

function loadCommands(bot) {
    fs.readdir('commands/', (err, files) => {

        if (err) console.log(err);
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
       
        if (jsfile.length > 0) {
            
       
    
        jsfile.forEach((f, i) => {

            const pull = require(`../commands/${f}`);
            if(pull.config) {
                bot.commands.set(pull.config.name, pull); {
                  
                    commands.push(pull.config.name)
    
    
                    if(pull.config.catgory === "configuration") {
                        configuration.push(pull.config.name)
                        
                    }
                    else if (pull.config.catgory === "Moderation") {
                        moderation.push(pull.config.name)
                        
                    }
                    else if (pull.config.catgory === "General") {
                        general.push(pull.config.name)
                        
                    }
                    else {
                        others.push(pull.config.name)
                    }
                }
                if(bot.help) {
                    bot.help.set(pull.config.name, pull);
                }
                if(bot.Usage) {
                    bot.Usage.set(pull.config.Usage, pull);
                }
                if(bot.example) {
                    bot.example.set(pull.config.example, pull)
                }
                
                pull.config.aliases.forEach(alias => {
                    bot.aliases.set(alias, pull.config.name);
                });
            }
            
              
        })
    }

        const folders = files.filter(f => f.split('.').pop() !== 'js' && fs.statSync(`./commands/${f}`).isDirectory());
        folders.forEach(dir => {
            const dir_commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
            for(let file of dir_commands){
              
                const pull = require(`../commands/${dir}/${file}`);
                if(!pull.config) return  
               
                
                bot.commands.set(pull.config.name, pull); {
                    commands.push(pull.config.name)
    
    
                    if(pull.config.catgory === "configuration") {
                        configuration.push(pull.config.name)
                        
                    }
                    else if (pull.config.catgory === "Moderation") {
                        moderation.push(pull.config.name)
                        
                    }
                    else if (pull.config.catgory === "General") {
                        general.push(pull.config.name)
                        
                    }
                    else {
                        others.push(pull.config.name)
                    }
                }
                if(bot.help) {
                    bot.help.set(pull.config.name, pull);
                }
                if(bot.Usage) {
                    bot.Usage.set(pull.config.Usage, pull);
                }
                if(bot.example) {
                    bot.example.set(pull.config.example, pull)
                }
                
                pull.config.aliases.forEach(alias => {
                    bot.aliases.set(alias, pull.config.name);
                });
                  
            }
        })
        
       


    })
    
}

module.exports = {
    loadCommands,
    commands,
    moderation,
    others,
    general,
    configuration,
    
    
}
