const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Yazmam İçin Birşey Yazmalısın!**');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`${mesaj}`)
    .setImage('')
    .setImage('http://www.zulaonline.com/Content/assets/i/maps/canakkale.jpg')
    .setTimestamp()
    .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryapnitro', 'nduyur'],
  permLevel: 2
};

exports.help = {
  name: 'zula',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
