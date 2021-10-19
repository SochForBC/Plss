const {Client, Message} = require('discord.js')
/**
 * 
 * @param {Client} bot 
 * @param {*} link 
 */

async function  change_avatar(bot, link, message) {
    if(!bot) return
    if(!link) return
    await bot.user.setAvatar(link).then(user => {
      return message.channel.send(message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(bot.user.displayAvatarURL({dynamic:true}))))
    }).catch(err  => {
        console.log(err)
        return message.channel.send('ماقدرت اغير صورة في مشكلة او كول داون')
    })
    
}


module.exports = change_avatar