const Discord = require('discord.js')

exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Doğru Kullanım >\n .avatar @kullanıcı')
}});
   const Discord = require('discord.js')
        const kullanicibilgimk = new Discord.RichEmbed()
        .setTitle(member.user.tag+" Avatar Fotoğrafı")
        .setImage(member.user.avatarURL)
        .setFooter(msg.author.username + "Tarafından İstendi.")
        return msg.channel.send(kullanicibilgimk);
    }
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'avatar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'avatar [@Kişi]'
 }