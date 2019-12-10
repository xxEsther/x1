const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Çevrimiçi Destek İçin Tıkla.')
      .setURL('http://discord.gg/HRTXdA4')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discord.gg/yRPt74p')
      .setThumbnail(message.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/attachments/616747036200534044/647069572423352340/79210c879cde0f6ada4fd0a25f9b65e5.png')
        .addField('REC-ND | Botu Davet Etmek İçin ','https://is.gd/oiqgSA', true)
        .setImage('https://cdn.discordapp.com/attachments/616747036200534044/647069286396985365/rn_yeni_pp.jpg')
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

module.exports.help = {
  name: 'davet',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};