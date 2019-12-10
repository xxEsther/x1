const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
       
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`modlogK_${message.guild.id}`)
    message.channel.send(`Log Kanalı Başarıyla Sıfırlandı.`)
    return
  }
  
    if (!channel) {
        return message.channel.send(`Doğru Kullanım\n .log-ayarla #kanal`)
    }
  
    db.set(`modlogK_${message.guild.id}`, channel.name)
  
   const embed = new Discord.RichEmbed()
   .setDescription(`Log kanalı başarıyla ${channel} olarak ayarlandı.\n\nKapatmak istiyorsanız lütfen\n\n .log-ayarla kapat`)
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .setColor("RANDOM")
    message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'log-ayarla', 
  description: "",
  usage: ''
};