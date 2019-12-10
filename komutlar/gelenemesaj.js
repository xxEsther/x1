const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`);	let args1 = args.slice(0).join(" ");
var mesaj = db.fetch(`sunucular.${message.guild.id}.yenm`)
if(!mesaj) return message.channel.send("İlk once .ymesaj yazıp ozellı aç.")

if(!args1) return message.channel.send("Ne yazıcamı yazsan.")

db.set(`sunucular.${message.guild.id}.yenmesaj`,args1)

message.channel.send(" Artık biri sunucuya girine ona dm den " + args1 + " yazacam.")
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ygmesaj',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};