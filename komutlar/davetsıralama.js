const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davetleri göremiyorum yeterli iznim yok');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ●  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**DAVET SIRALAMASİ**`)
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .addField('Sunucu Davet Listesi', `\n${possibleinvites.join('  Daveti Var                   \n\n')}`)
    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası"],
  permLevel: 0,
  kategori: "sunucu",

};

exports.help = {
  name: 'davetler',
  description: 'Sunucunuza en çok kullanıcı getirenleri sıralar.',
  usage: 'davet-sıralaması',
 
};