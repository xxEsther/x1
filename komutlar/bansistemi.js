const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://rec-nd.glitch.me/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discordapp.com/invite/HRTXdA4')
      .setThumbnail(message.author.avatarURL)
        .addField('Ban sistemi kullanımı','Ban sistemi Kurulumu', true)
        .addField('.banlimit 3','Belirlediğiniz rakamdan daha fazla ban atamazlar. \n[3 rakamını istediğiniz rakama çevirebilirsiniz]', true)
        .addField('.bancı @role','Bancı @rol \n[Belirlediğiniz rolde ban atma yetkisi olur \nO rolde olanlar max belirlediğiniz rakamda ban atabilirler.]', true)
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bannedsa'],
  permLevel: 0
};

module.exports.help = {
  name: 'bansistemi',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};