const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://dummyimage.com/2500x500/000000/ff0000&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setAuthor("Oluşturan: @" + message.author.username)
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('REC-ND Banner Sistemi')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'banner',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner <yazı>'
}