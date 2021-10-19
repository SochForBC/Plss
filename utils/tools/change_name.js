const {Client, Message} = require('discord.js')
/**
 * 
 * @param {Client} bot 
 * @param {*} link 
 */

async function  change_name(bot, name, message) {
    if(!bot) return
    if(!message) return
    if(!name) return
    await bot.user.setUsername(name).then(user => {
        message.channel.send(`تم تغير لاسم الى ${user.username}`)
    }).catch(err  => {
        console.log(err)
        return message.channel.send('ماقدرت اغير لاسم في مشكلة او كول داون')
    })
   
   
    
}


module.exports = change_name