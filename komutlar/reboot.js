const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage('**Esther Bey, Yeniden Başlatmamı Gerçekten İstiyor musun?**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('**Bot Yeniden Başlatılıyor**').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'reboot'
};