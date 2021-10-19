const Discord = require('discord.js');
var numeral = require('numeral');
//const client = new Discord.Client({ ws:  {intents: ''}})
//const client = new Discord.Client();
const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const client1 = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const client2 = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const client3 = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const client4 = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const client5 = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES'] } });
const {loadCommands, commands, moderation,
  others,
  general, configuration, } = require('./utils/loadCommands');
const { loadevents } = require('./utils/loadevents')
const used = new Map();
const duration = require("humanize-duration");
const prefix = '-'
const ownres = ["455108784579149835", "527826654660132890", "352460871856947200", "665309785544982531", "609544947816988702", "505442667652448277", "732158721257635932", "315100220520267776", "795765805061111848", "765621344586825728" , "734355052075941938" , "693463762404900864" , "503665035696930829" ,  ]
//module.exports = ownres555
//--------------------------------------تشغيل بوت و مونقو دي بي----------------------------------------------------//
client.login(process.env.token);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
module.exports = client


loadCommands(client);
loadevents(client)
//-----------------------
//--------------------------------------------------------------------------------------------------------//
module.exports  = {
  client1,
  client2,
  client3,
  client4,
  client5,
}
client1.on('ready', () => {
  console.log('on')
})
const change_avatar = require('./utils/tools/change_avatar')
const change_name = require('./utils/tools/change_name')
const bc_send = require('./utils/tools/obc');
const { link } = require('fs');
client1.on('message', async message => {
  if(!ownres.includes(message.author.id)) return
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase()
  const args = messageArray.slice(0);
  const link_url = args[1]
  
  if(message.content.includes(`${prefix}setavatar1`) || message.content.includes(`${prefix}setavt1`)) {
    if(!link_url) return
    await change_avatar(client1, link_url, message)
 }
 if(message.content.includes(`${prefix}setname1`) || message.content.includes(`${prefix}sn1`)) {
   const name = args.slice(1).join(' ');
   if(!name) return
  await change_name(client1, name, message)
}
if(message.content.includes(`${prefix}obc1`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'obc', content_bc)
}
if(message.content.includes(`${prefix}bc1`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'bc', content_bc)
}
})
client2.on('message', async message => {
  if(!ownres.includes(message.author.id)) return
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase()
  const args = messageArray.slice(0);
  const link_url = args[1]
  
  if(message.content.includes(`${prefix}setavatar2`) || message.content.includes(`${prefix}setavt2`)) {
    if(!link_url) return
    await change_avatar(client2, link_url, message)
 }
 if(message.content.includes(`${prefix}setname2`) || message.content.includes(`${prefix}sn2`)) {
   const name = args.slice(1).join(' ');
   if(!name) return
  await change_name(client2, name, message)
}
if(message.content.includes(`${prefix}obc2`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'obc', content_bc)
}
if(message.content.includes(`${prefix}bc2`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'bc', content_bc)
}
})
client3.on('message', async message => {
  if(!ownres.includes(message.author.id)) return
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase()
  const args = messageArray.slice(0);
  const link_url = args[1]
  
  if(message.content.includes(`${prefix}setavatar3`) || message.content.includes(`${prefix}setavt3`)) {
    if(!link_url) return
    await change_avatar(client3, link_url, message)
 }
 if(message.content.includes(`${prefix}setname3`) || message.content.includes(`${prefix}sn3`)) {
   const name = args.slice(1).join(' ');
   if(!name) return
  await change_name(client3, name, message)
}
if(message.content.includes(`${prefix}obc3`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'obc', content_bc)
}
if(message.content.includes(`${prefix}bc3`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'bc', content_bc)
}
})
client4.on('message', async message => {
  if(!ownres.includes(message.author.id)) return
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase()
  const args = messageArray.slice(0);
  const link_url = args[1]
  
  if(message.content.includes(`${prefix}setavatar4`) || message.content.includes(`${prefix}setavt4`)) {
    if(!link_url) return
    await change_avatar(client4, link_url, message)
 }
 if(message.content.includes(`${prefix}setname4`) || message.content.includes(`${prefix}sn4`)) {
   const name = args.slice(1).join(' ');
   if(!name) return
  await change_name(client4, name, message)
}
if(message.content.includes(`${prefix}obc4`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'obc', content_bc)
}
if(message.content.includes(`${prefix}bc4`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'bc', content_bc)
}
})
client5.on('message', async message => {
  if(!ownres.includes(message.author.id)) return
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase()
  const args = messageArray.slice(0);
  const link_url = args[1]
  
  if(message.content.includes(`${prefix}setavatar5`) || message.content.includes(`${prefix}setavt5`)) {
    if(!link_url) return
    await change_avatar(client5, link_url, message)
 }
 if(message.content.includes(`${prefix}setname5`) || message.content.includes(`${prefix}sn5`)) {
   const name = args.slice(1).join(' ');
   if(!name) return
  await change_name(client5, name, message)
}
if(message.content.includes(`${prefix}obc5`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'obc', content_bc)
}
if(message.content.includes(`${prefix}bc5`)) {
  const content_bc = args.slice(1).join(' ');
  if(!content_bc) return
 await bc_send(message, 'bc', content_bc)
}
})
