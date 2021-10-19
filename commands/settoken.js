
const mongoose  = require("mongoose");
const used = new Map();
const ms = require('ms')
const { client1, client2, client3, client4, client5 } = require('../index')
const Discord = require('discord.js')
const duration = require("humanize-duration");
const {Client, Message} = require('discord.js');
/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */

module.exports.run = async (client, message, args, prefix) => { 
    function embedcheck(bot) {
        const embed = new Discord.MessageEmbed()
        .setTitle('معلومات عن توكن البوت').setDescription(`
                   **Name:** ${bot.user.username}
                   **ID:** ${bot.user.id} 
                   **Age:** ${duration(Date.now() - bot.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                   **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=384064&scope=bot)
                   
                
                   `).setColor('GREEN').setThumbnail(bot.user.displayAvatarURL()).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp()
              return embed
              
    }
if(client !== client) return
const tokennumber = args[1]

if(!tokennumber) return message.reply(`${prefix}settoken 1 [token]`)
const token2 = args[2]
if(!token2) return message.reply(`${prefix}settoken 1 [token]`)
message.delete()
if(tokennumber === "1") {
    await client1.destroy()
    await client1.login(token2)
    
    
    .catch(async error => {
        return message.channel.send("**توكن خربان / مبند**")
       }) 
     
       await message.channel.send(embedcheck(client1))
}
if(tokennumber === "2") {
    await client2.destroy()
    await client2.login(token2)
    
    
    .catch(async error => {
        return message.channel.send("**توكن خربان / مبند**")
       }) 
     
       await message.channel.send(embedcheck(client2))
}
if(tokennumber === "3") {
    await client3.destroy()
    await client3.login(token2)
    
    
    .catch(async error => {
        return message.channel.send("**توكن خربان / مبند**")
       }) 
     
       await message.channel.send(embedcheck(client3))
}
if(tokennumber === "4") {
    await client4.destroy()
    await client4.login(token2)
    
    
    .catch(async error => {
        return message.channel.send("**توكن خربان / مبند**")
       }) 
     
       await message.channel.send(embedcheck(client4))
}
if(tokennumber === "5") {
    await client5.destroy()
    await client5.login(token2)
    
    
    .catch(async error => {
        return message.channel.send("**توكن خربان / مبند**")
       }) 
     
       await message.channel.send(embedcheck(client5))
}

}

module.exports.config = {
    name: "settoken",
    aliases: ["st"],
}
