exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send('Bu komutu kullanabilmek için **Davet Oluşturma** yetkisine sahip olmalısın!')
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
  
      message.channel.send('Bu Sunucunun Davet Linkini Kurdum.\n'
        + 'Link Aşağıda'
        + 'Bu Sunucun Davet Linki \n' +
        `https://discord.gg/${invite.code}`).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davetkur',
    description: 'Bulunduğunuz sunucunun davet linkini atar.',
    usage: 'davet-kur'
  };
  
