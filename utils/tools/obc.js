const {Client, Message, Guild, MessageEmbed} = require('discord.js')
/**
 * 
 * @param {Client} bot 
 * @param {Message} message 
 */

async function  change_name(message, type, content) {
    var number_done = 0
    var number_error = 0
    if(!content) return
    if(!message) return
    if(!type) return
    if(type === "bc") {

   

    message.channel.send(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
    تم ارسال بنجاح الى: ${number_done}
    فشل ارسال الى: ${number_done}`)).then(mainembed => { 
    message.guild.members.cache.forEach(async member => {
       if(member.user.bot) return
        await member.send(content).then(msg => {
            number_done++
            mainembed.edit(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
            تم ارسال بنجاح الى: ${number_done}
            فشل ارسال الى: ${number_error}`).setColor('GREEN'))
             
        })}).catch(err  => {
            number_error++
            mainembed.edit(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
            تم ارسال بنجاح الى: ${number_done}
            فشل ارسال الى: ${number_error}`).setColor('RED'))
        })
    
    })
}
else if (type === 'obc') {
    message.channel.send(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
    تم ارسال بنجاح الى: ${number_done}
    فشل ارسال الى: ${number_done}`)).then(async mainembed => { 
        await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach(async member2 => {
            if(member2.user.bot) return
            await  member2.send(content).then(msg_done => {
                number_done++
                mainembed.edit(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
                تم ارسال بنجاح الى: ${number_done}
                فشل ارسال الى: ${number_error}`).setColor('GREEN'))
          }).catch(err  => {
            number_error++
            mainembed.edit(new MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
            تم ارسال بنجاح الى: ${number_done}
            فشل ارسال الى: ${number_error}`).setColor('RED'))
        })
        })
    })

}
   
    
}


module.exports = change_name