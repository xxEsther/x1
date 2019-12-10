const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`);var mesaj = db.fetch(`sunucular.${message.guild.id}.yenm`)
if(!mesaj) { message.channel.send(" Başarıyla yeni gelene mesaj atcak mesajı değiştirmek istersen .ygmesaj (Kapatmak ıcın komutu tekrar yazın)")
db.set(`sunucular.${message.guild.id}.yenm`,"açık")
return;
}
db.delete(`sunucular.${message.guild.id}.yenm`)
message.channel.send(" Yeni gelene mesaj kapandı")  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ymesaj',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};