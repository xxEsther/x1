const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args, config) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  let prefix = ayarlar.prefix
  
     if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Doğru Kullanım : \n .kicklimit 3 **`).setColor("Black"));
    db.set(`banlimitayar_${message.guild.id}`, args[0]) 
 
  let deneme = args[0]
message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Kick limit başarıyla aktifleştirildi!`).setColor("RANDOM"));
      }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel:0,
    kategori: 'moderasyon'
};

exports.help = {
    name: 'kicklimit',
    description: 'Sunucudaki BanYetkilisinin Max kaç kişiyi banlıyacağını ayarlar.',
    usage: 'yardım [komut].'
}