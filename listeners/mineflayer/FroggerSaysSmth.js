const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  object: bot,
  event: 'messagestr',
  description: 'Attack mobs around you',
  reload: {
    pre: function() {
      
    },
    post: function() {

    }
  },
  author: 'Pix3lPirat3',
  execute: function(message, messagePosition, jsonMsg, sender, verified) {
    // User says `[formatter]` (or generated ID?)
    // console cmd: formatter <username> <message>
    // and it parses the format from those 2 objects..?

    // NO - running `formatter` will send a message
    // and this listener will send the message and do the rest automatically

    if (sender === 'frogger523') {
      // Do something when frogger523 says something
      // For example, make the bot reply
      bot.chat('Hello, frogger523! You said: ' + message);
    }
  }
}
//test commit