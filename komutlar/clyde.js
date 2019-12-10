const Discord = require('discord.js');
const { get } = require("superagent");

exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send("Clyde'nin ne yazmasını istersin?")
    
    let url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`
    
    get(url).then(res => {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("Clyde diyorki..")
            .setImage(res.body.message)
        setTimeout(() => {
            return message.channel.send(embed);
        }, 200);
    }); 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı Komutları"
}

exports.help = {
  name: 'clyde',
  description: "Clyde'a mesaj yazdırır.",
  usage: 'clyde <mesaj>'
}