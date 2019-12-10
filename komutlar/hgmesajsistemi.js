const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://rec-nd.glitch.me/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128', 'https://discordapp.com/invite/HRTXdA4')
      .setThumbnail(message.author.avatarURL)
        .addField('Hoşgeldin Mesaj Sistemi Kullanımı','Hoşgeldin Mesaj Sistemi Kurulumu', true)
        .addField('.ygmesaj','Özelden hoşgeldin Mesajını Ayarlamanızı Sağlar.', true)
        .addField('.ymesaj','Özelden hoşgeldin Sistemini Açar/Kapatır.', true)
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banned3sa'],
  permLevel: 0
};

module.exports.help = {
  name: 'gelenemesajsistemi',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};