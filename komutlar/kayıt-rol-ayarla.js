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
  
  let role = message.mentions.roles.first()

    if (!role) {
        return message.reply("\n**REC-ND ** Kayıt Sistemi Aktifleştirme\n● ``.kayıtsistemi``  <**Aç-Kapat**>  ●  Kayıt Sistemini Aktifleştirirsiniz\n● ``.kayıtkanal`` **#kanal**  ●  Kayıt Kanalını Belirlersiniz\n● ``.kayıtrol`` **@Role**  ●  Kayıt Rolünü Belirlersiniz\n● ``.kayıt``  ●  Kayıt Olursunuz")
    }

  
    db.set(`krol_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setTitle(`» Kayıt olunca verilecek rol başarıyla **${role.name}** olarak ayarlandı!\n» Rolü değiştirmek istersen tekrar etiketlemelisin.`)
    .setColor("RANDOM")
    message.channel.send({embed})
      }
  }

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtro1l'],
    permLevel: `ueytki`,
}

exports.help = {
    name: 'kayıtrol',
    category: 'moderasyon',
    description: 'Birisi susturulunca verilecek rolü ayarlar.',
    usage: 'sustur-rol-ayarla <@rol>'
}
   