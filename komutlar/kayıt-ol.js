const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
  const db = require('quick.db')
  let kullanıcı = await db.fetch(`ksistem_${msg.guild.id}`);

  if( kullanıcı == undefined){
msg.reply("**Sanırım Yetkiliniz `.kayıtsistemi` 'ni açmamış.'**")
  }else{
      if( kullanıcı == "acik"){
    let kayıt = msg.author

         const kanal = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

         const channelss = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

  if (msg.channel.id !== kanal) return msg.channel.send(`Kayıt Olmak İçin Lütfen <#${kanal}> Kanalına Geçiş Yapınız.`).then(msg => msg.delete(10000))
    if (msg.channel.id == kanal) {
                   const rol = db.fetch(`krol_${msg.guild.id}`)
                   var is = args[0]
                   var ya = args[1]
                   if(!is) return msg.channel.send('isim gir')
                   else if(!ya) return msg.channel.send('yaş gir')
else {
msg.member.setNickname(is + " | "+ ya)
msg.member.addRole(rol)
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
          description: (msg.author + "  Kayıt İşlemi Başarılı , Lütfen Bekleyiniz Yönlendiriliyorsunuz  ")
     }
    
                     
    })
      }}
  }
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt1','kayıtol'],
    permLevel: 0
};

exports.help = {
    name: 'kayıt',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'kayıtol'
};
   