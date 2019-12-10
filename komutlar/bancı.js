const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let role = message.mentions.roles.first()
  
    if (!role) {
        return message.reply("Ayarlamak istediğin rolü etiketlemelisin!")
      
    }

    /*(!rol[message.guild.id]){
        rol[message.guild.id] = {
            susturRol: role.id
        };
    }
    fs.writeFile("././jsonlar/sRol.json", JSON.stringify(rol), (x) => {
        if (x) console.error(x)
      })*/
  
    db.set(`bRol_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
message.channel.sendEmbed(new Discord.RichEmbed()
                          .setDescription(`Bancı Rolü başarıyla aktifleştirildi!`)
                          .setColor("RANDOM"));
    message.channel.send(embed);
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban-yetkilisi'],
    permLevel: 4,
    kategori: "moderasyon2"
}

exports.help = {
    name: 'bancı',
    category: 'moderasyon',
    description: 'Ban Yetkilisini Ayarlar',
    usage: 'bancı <@rol>'
}