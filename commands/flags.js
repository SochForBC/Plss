
const used = new Map();
const {UserFlags} = require('discord.js')
const Discord = require('discord.js')
const {Message, Guild, Client, Channel} = require('discord.js')
/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 *  @param {Channel} channel 
 * @param {String[]} args 
 */

module.exports.run = async (client, message, args, prefix) => {
      //  if(message.guild.id)
            if(!message.author.id === "503665035696930829") return
            if(!args[1]) return
            const badge = args[1].toUpperCase()
            const flas = ['DISCORD_EMPLOYEE', 'DISCORD_PARTNER', 'BUGHUNTER_LEVEL_1', 'BUGHUNTER_LEVEL_2', 'HYPESQUAD_EVENTS', 'HOUSE_BRAVERY', 'HOUSE_BRILLIANCE', 'HOUSE_BALANCE', 'EARLY_SUPPORTER', 'TEAM_USER', 'SYSTEM', 'VERIFIED_BOT', 'VERIFIED_DEVELOPER']
            if(!flas.includes(badge)) return message.channel.send(new Discord.MessageEmbed().setDescription(`
            flags:
            \`DISCORD_EMPLOYEE\`: 'Discord Employee',
             \`DISCORD_PARTNER\`: 'Discord Partner',
            \`BUGHUNTER_LEVEL_1\`: 'Bug Hunter (Level 1)',
            \`BUGHUNTER_LEVEL_2\`: 'Bug Hunter (Level 2)',
            \`HYPESQUAD_EVENTS\`: 'HypeSquad Events',
            \`HOUSE_BRAVERY\`: 'House of Bravery',
            \`HOUSE_BRILLIANCE\`: 'House of Brilliance',
            \`HOUSE_BALANCE\`: 'House of Balance',
            \`EARLY_SUPPORTER\`: 'Early Supporter',
            \`TEAM_USER\`: 'Team User',
            \`SYSTEM\`: 'System',
            \`VERIFIED_BOT\`: 'Verified Bot',
            \`VERIFIED_DEVELOPER\`: 'Verified Bot Developer'`))
            const user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            message.guild.members.fetch().then( async fetchedMembers => {
                let text = ""
                let i = 1
              await  fetchedMembers.forEach(async sdl => {
                  if(sdl.user.flags) {
                      if(sdl.user.flags.toArray()) {
                        if(!sdl.user.flags.toArray().includes(badge)) return

                        text += `${i++} - ${sdl}\n`
                      }
                   
                  }
                          
                        
                        })

                
                const splited = Discord.Util.splitMessage(text).forEach(spldsd => {
                    message.channel.send(new Discord.MessageEmbed().setDescription(spldsd))
                })

            })
//         return console.log(sqsd)
         
      
                  }
            
        
module.exports.config = {
    name: "get",
    aliases: [],
    catgory: "General",
    Usage: `-suggestion [suggestion]`,
    example: `
    -sug add meme channel`,
    help: "To suggest something in a server"
}
