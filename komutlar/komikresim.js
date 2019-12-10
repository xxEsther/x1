const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
  var request = require('request');

exports.run = (client, message, params) => {
   var request = require('request');

request('https://rec-nd-api.glitch.me/api/cresim', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
      var embed = new Discord.RichEmbed()
    .setColor("#ffffff")
      .setThumbnail(info.link)
      .setURL('http://rec-nd.cf/')
      .setThumbnail('https://miro.medium.com/max/1600/1*4SjPAbDfKFVOF36NaV4LoQ.gif')
        .addField('Zamanını REC-ND ile Geçirebilirsin! ','http://rec-nd.ml/',true)
        .setImage(info.link);
  
        message.channel.send(embed); 
    }
});
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kresim"],
  permLevel: 0
};

exports.help = {
  name: 'komikresim',
  description: 'Rastgele Komik GİF-Fotoğrafı',
  usage: 'rgif'
};