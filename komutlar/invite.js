const Discord = require('discord.js');

exports.run = function(client, message, args) {

let user =  message.mentions.users.first() || message.author;
  
  message.guild.fetchInvites().then(guildInvites => { 
var test = 0;
guildInvites.forEach(a => {
if(a.inviter.id === user.id){
test = test + a.uses
}
})
message.channel.send(`** ${user} ** you have ** ${test} ** invites.`)
})}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invites'],
  permLevel: 0
};

module.exports.help = {
  name: 'invite',
  description: 'Kullanıcıya ait davet sayısını gösterir',
  usage: 'davetim'
};
 