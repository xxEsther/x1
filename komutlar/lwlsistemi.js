const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://rec-nd.glitch.me/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discordapp.com/invite/HRTXdA4')
      .setThumbnail(message.author.avatarURL)
        .addField('Level sistemi kullanımı','Level sistemi Kurulumu', true)
        .addField('.level resim https://eksiup.com/p/35206863vio4','.level Yazdığınızda arka planı seçtiğiniz linkdeki fotoğrafı koyar]', true)
        .addField('.level renk ffffff','ffffff Bir renk kodudur bu kodu değiştirebilirsin Bu kod yazı rengini değiştirir]', true)
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['levelsistem'],
  permLevel: 0
};

module.exports.help = {
  name: 'levelsistemi',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};