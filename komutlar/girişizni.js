const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

let p = "prefix"
  
let arguman = args[0];

if (!arguman) return message.channel.send(`<a:hata:631540163620896778> Lütfen bir bot id yazın.(Giriş izni iptal etmek için \`.giriş-izni iptal <botid>\`**`)

if (arguman === "iptal") {
 db.delete(`botİzinli_${args[1]}`) 
  message.channel.send(`\`${args[1]}\` IDsine sahip botun giriş izni iptal **edildi!**`)
} else {
   const embed = new Discord.RichEmbed() 
   .setTitle(`:warning: Sunucu Bot Koruma Sistemi REC-ND`)
   .setColor("RANDOM")
   .setDescription(`\`${arguman}\` IDsine sahip botun sunucunuza giriş verilmesini onaylıyor iseniz **onaylıyorum** yazın.`)
   .setFooter(`Lütfen 30 Saniye İçinde onaylıyorum Yazınız.`)
  message.channel.send(embed) 
  var filtre = m => m.author.id === message.author.id
    message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => { 
       if (collected.first().content === "onaylıyorum" || collected.first().content === "evet") {
       
db.set(`botİzinli_${arguman}`, "İzinli")
message.channel.send(`\`${arguman}\` IDsine sahip bot **doğrulandı!** Sunucuya **ekleyebilirsiniz!**`)
       }})
       }
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : [],
  permLevel : 0,
  kategori : `Ayarlar`
}
exports.help = {
  name : "giriş-izni",
  description : "Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage : "giriş-izni <botid>"
}