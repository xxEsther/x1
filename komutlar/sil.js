const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.reply(`**Sohbetinizi Başarıyla Temizledim **`).then(msg => msg.delete(94255000));
})
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle","siltemizle","süpür"],
  permLevel: 0
};

module.exports.help = {
  name: 'sil',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'sil-modülü'
};