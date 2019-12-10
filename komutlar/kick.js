const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  let rol = await db.fetch(`bRol_${message.guild.id}`)
 
  if(!message.member.roles.has(rol)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Yetkiniz Bulunmamakta veya Rol ayarlamadınız .kicksistemi ile Kick Sistemini ayarlayıp tekrar deneyiniz')           .setColor("RANDOM"));
  db.fetch(`banlimitayar_${message.guild.id}`)
  let sayı =  db.fetch(`banlimitayar_${message.guild.id}`)
  let limittt = await db.fetch(`banlimit_${message.author.id}`)
 if(limittt >= sayı) return message.channel.send(`${sayı ? sayı : '0'} Sayıdan Fazla Kick atamazsın!`)
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('BU KOMUT ÖZEL MESAJLARDA KULLANILAMAZ.')
  return message.author.send(ozelmesajuyari); }
  
  let guild = message.guild
  //let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  //if (reason.length < 1) return message.reply('niye kick adamı onu yazaydın.');
  if (message.mentions.users.size < 1) return message.reply('Kicklenecek kullanıcıyı etiketlemelisin').catch(console.error);

  if (!message.guild.member(user).ban) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
  message.channel.send(`${user} , Başarıyla Sunucudan Banlanmıştır.`)
  db.add(`banlimit_${message.author.id}`, 1)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ata'],
  permLevel: 0,
  kategori : 'moderasyon2'
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick @etiket'
};
   