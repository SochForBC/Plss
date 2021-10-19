const fs = require('fs');

function loadevents(bot) {
fs.readdirSync("./events/").forEach((file) => {
    const events = fs.readdirSync("./events/").filter((file) =>
      file.endsWith(".js")
    );

    for (let file of events) {  
      let pull = require(`../events/${file}`);
      
      if (pull.name) {
            bot.events.set(pull.config.type, pull);
            
      } else {
        continue;
      }
    }
  });
}
module.exports = {

    loadevents,
    
}
