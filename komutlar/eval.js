const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  if(!args[0]) return
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let çıkış = (`\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(çıkış)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "Sahip Komutları"
};

exports.help = {
  name: 'eval',
  description: 'Bot adminlerinin bot üzerinde kod test etmesini sağlar.',
  usage: 'eval <kod>'
  };
