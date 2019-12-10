const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("REC-ND Pingi, **" + client.ping + "** ms!\n`[Discord Bot Apisine Bağldır Botun Hızı Pinge Bağlı Değildir.]`");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['pings'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
