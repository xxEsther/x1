const Discord = require("discord.js")
exports.run = function(client, message, args) {
  let id = "596643086248050701"//botunuz id'sini giriniz
  const tcembed = new Discord.RichEmbed()
.setImage(`https://discordbots.org/api/widget/${id}.png`)
return message.channel.send(tcembed)
    };
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dblya"],
  permLevel: 0
};
module.exports.help = {
  name: 'dbl',
  description: 'REC-ND Offical.',
};