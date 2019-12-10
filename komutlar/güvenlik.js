 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
var args = args[0]
  let rol = message.mentions.channels.first();
  
  if (!rol) return message.channel.send(" <a:9876_attention:617709987199713303>  Hata : Kullanım .güvenlik #kanal")
  
  db.set(`guvenlik_${message.guild.id}`, "açık")
  
  db.set(`güvenlikk_${message.guild.id}`, rol)
  message.channel.send(" <a:7006_happy_cat:617709988160339968>  Başarıyla Güvenlik Kanalını " + rol.name + " yaptın.")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güvenlik',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};