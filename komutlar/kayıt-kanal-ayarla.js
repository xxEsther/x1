const Discord = require('discord.js')
const fs = require('fs');
  const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`);
    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("**Kayıt komutları kapalı açmak için !kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  

  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("\n**REC-ND ** Kayıt Sistemi Aktifleştirme\n● ``.kayıtsistemi``  <**Aç-Kapat**>  ●  Kayıt Sistemini Aktifleştirirsiniz\n● ``.kayıtkanal`` **#kanal**  ●  Kayıt Kanalını Belirlersiniz\n● ``.kayıtrol`` **@Role**  ●  Kayıt Rolünü Belirlersiniz\n● ``.kayıt``  ●  Kayıt Olursunuz")
    }

  
    db.set(`kkanal_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Başarılı: ${channel}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-kanal'],
    permLevel: `yetkiyok`,

}

exports.help = {
    name: 'kayıtkanal',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'sayaç-kanal-ayarla <#kanal>',

}
   