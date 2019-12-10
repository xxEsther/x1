const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const express = require('express');
const app = express();
const http = require('http');
const Jimp = require('jimp');
const db = require('quick.db');
require('./util/eventLoader')(client);

    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("message", msg => {
    const kzgn = client.emojis.get("512302904141545509");
    const emoji = (client.emojis.find("name", "kim").toString())
    const embedlul = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription( msg.author + " Reklam Yasak Bunu Bilmiyormusun! <a:kim:608774367417204746> ")
    
const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " Reklam Yapıyor!")
      .setColor('RANDOM')
      .setDescription("REC-ND Sayesinde Sunucunuz 7/24 Gözetlenmekte ve Korunmaktadır.\n DİKKAT:  Sunucuyu Yönet Yetkisi Olanların Link Atmalarına İzin Veriyorum.")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('MANAGE_GUILD')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//////////////////////

client.on("guildCreate", guild => {
var random = guild.channels.filter(y => y.name === "text").random;
random().send(`Sa`)
})

//////////////////////////////

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('**Aleyküm Selam, Hoşgeldin Bugün Nasılsın :) **');      
      } 
      }
    }); 

/////////////////////////////////////

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.reply(`\n**█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█**\n**█░░<a:anan:631894362946666496>  Bir Gold  Üye  Belirdi <a:anan:631894362946666496>░░█**\n**█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█**`)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

//////////////////////////////

client.on("guildMemberAdd", async member => {
var güvenlik = db.fetch(`guvenlik_${member.guild.id}`)
if (!güvenlik) return;
 var güvenlikk = db.fetch(`güvenlikk_${member.guild.id}`)
     let kanal = member.guild.channels.get(güvenlikk.id)
let userinfo = {};
        
        userinfo.dctarih = moment.utc(member.guild.members.get(member.id).user.createdAt).format('YYYYMMDD')

        userinfo.dctarihkatilma = moment.utc(member.guild.members.get(member.id).joinedAt).format('YYYYMMDD')

  if(userinfo.dctarih > userinfo.dctarihkatilma - 10) return kanal.send(" <a:9876_attention:617709987199713303> " + member.user.username + " Adlı kullanıcı sunucuya giriş yaptı | ** Şüpheli Gözüküyor ** | Hesabını yeni kurmuş.")
    kanal.send(" <a:7006_happy_cat:617709988160339968> Başarıya `" + member.author.tag + "` Adlı kullanıcı sunucuya giriş yaptı.  | ** Güvenli Gözüküyor ** |.")      
  //        kanal.send(member.user.username * " adlı kullanıcı sunucya giriş yaptı **güvenli** gözükyor")
        
})



///////////////////////////////BOT KORUMA///////////////////////////


client.on("guildMemberAdd", async member => {
if (db.has(`botkoruma_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botİzinli_${member.id}`) === true) return;

member.kick(member, `Bot koruması aktif!`)

member.guild.owner.send(`Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`.giriş-izni ${member.id}\``)
})


//////////////////////////////  MOD LOG  ////////////////////////////

client.on("messageDelete", async message => {
  
  if (message.author.bot) return;
  
  var user = message.author;
  
  var kanal = await db.fetch(`modlogK_${message.guild.id}`)
  if (!kanal) return;
var kanal2 = message.guild.channels.find('name', kanal)  

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal2.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
  var user = oldMsg.author;
  
  var kanal = await db.fetch(`modlogK_${oldMsg.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMsg.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal2.send(embed);
  
});

client.on("roleCreate", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)  

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleDelete", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)    

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleUpdate", async role => {
  
  if (!log[role.guild.id]) return;
  
 var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on('voiceStateUpdate', async (oldMember, newMember) => {
  
  
  
  var kanal = await db.fetch(`modlogK_${oldMember.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMember.guild.channels.find('name', kanal) 
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal2.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal2.send(embed);
    
  }
  
  client.on('channelCreate', async (channel,member) => {
let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
		if (!channel.guild) return;
			if (channel.type === "text") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
				.setFooter(`ID: ${channel.id}`)
				embed.send(embed);
			};
			if (channel.type === "voice") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			}
		
	})
		
	client.on('channelDelete', async channel => {
		    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = channel.guild.channels.get(gc[channel.guild.id].gkanal)
    if (!hgK) return;
			if (channel.type === "text") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			};
			if (channel.type === "voice") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			}
		
	});
  
});

/////////////////////////////////////////////////////////////

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});


client.on('guildMemberAdd', member => {
  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    if (db.has(`dKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`dKanal_${member.guild.id}`).replace("<#", "").replace(">", "")
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
     db.add(`davet_${invite.inviter.id + member.guild.id}`,1)
let bal  = db.fetch(`davet_${invite.inviter.id + member.guild.id}`)
   member.guild.channels.get(channel).send(`:inbox_tray: ** <@${member.id}> Joined**; İnvited by **${davetçi.tag}** (`+'**'+bal+'** invites)')
  })


});
client.on("guildMemberRemove", async member => {

    member.guild.fetchInvites().then(guildInvites => {

      const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

       db.subtract(`davet_${invite.inviter.id + member.guild.id}`,1)
    })
})

//////////////////////////////////////////////////////////////////

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


//----------------------------------TAG-----------------------------// 

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} ${member.user.username}`)
});

//----------------------------------TAG SON-----------------------------// 

client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1  )
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 120) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    

db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
const levelup = client.emojis.get('562049332216594454')
if (msg.guild.id == "487705975466229770") return;
msg.channel.send(`<a:level:627954994741510174> ** <@${msg.author.id}> Level Atladın!**`)

    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {
  if (db.has(`rollss_${msg.guild.id}`) === true) {
    
 var r = db.fetch(`roll_${msg.guild.id}`)
 var s = db.fetch(`rollss_${msg.guild.id}`)
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`<@${msg.author.id}> başarıyla **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0}** seviyeyi geçtin ve **${msg.guild.roles.get(r).name}** rolünü aldın!`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };
}};
  
});

//----------------------------------LEVEL SON-----------------------------// 

client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${ozelkomutYazi}`) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

////// Otorol Modülü ////// 

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("CHYPER", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:4568_aVerified:612722240274038786>  Hoşgeldin ** <@${member.id}> ** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

}); 

//////////////////sayaç

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(` <a:9330_tickred:612722239749619717>  ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:4568_aVerified:612722240274038786>  ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

///////////link-engel

let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
client.on("message", msg => { 
if (!linkEngel[msg.guild.id]) return;
if (linkEngel[msg.guild.id].linkEngel === "kapali") return;
    if (linkEngel[msg.guild.id].linkEngel === "acik") {
    var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/)
    if (regex.test(msg.content)== true) {
    if (!msg.member.hasPermission("MANAGE_GUILD")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Link Engeli!")
        .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Link atmana izin vermeyeceğim!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});

////////////////////////ST-AT BAŞLANGICI/////////////////

client.on('guildMemberAdd',async member => {
 const guild = member.guild
     
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Üye Sayısı ● ${guild.memberCount}`)
    }
})

client.on('guildMemberRemove',async member => {
 const guild = member.guild
    
 
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Üye Sayısı ● ${guild.memberCount}`)
    }
})

///////////////hazır-sunucu

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Sunucu-kur Zaten Ayarlanmış.")
  message.channel.send(`Sunucu kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('⭐│İNFORMATİONS│⭐', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('⭐│rules', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│İNFORMATİONS│⭐")));
 message.guild.createChannel('⭐│announcement', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│İNFORMATİONS│⭐")));
       message.guild.createChannel('⭐│invites', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│İNFORMATİONS│⭐")));
            message.guild.createChannel('⭐│partners', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│İNFORMATİONS│⭐")));

       }) 
       .then((collected) => {
        message.guild.createChannel('🎉│CHATS│🎉', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`🎉│chat`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🎉│CHATS│🎉")));
     message.guild.createChannel(`🎉│foto-chat`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "🎉│CHATS│🎉")));
     message.guild.createChannel(`🎉│bot-chat`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "🎉│CHATS│🎉")));
     message.guild.createChannel(`🎉│instagram`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "🎉│CHATS│🎉")));
     message.guild.createChannel('powered-by-rec-nd-team ', 'text')
        
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")));

      message.guild.createChannel(``, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "💼│Good Founder");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
})

    message.guild.createChannel('🔱│YETKİLİ ODALARI│🔱', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Founder`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "💼│Good Founder");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
     })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Management`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "🔱│Management");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
     })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Authority`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "👑│Authority");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Sub-Authorized`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "✨│Sub-Authorized");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Support`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "🧢│Support");
      let role4 = message.guild.roles.find("name", "📌│Moderator");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
      c.overwritePermissions(role4, {
          CONNECT: true,
      });
  })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Team Meeting`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "🎈│Our Team");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

    message.guild.createChannel('', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱│Team`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🔱│YETKİLİ ODALARI│🔱")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "💼│Good Founder");
      let role3 = message.guild.roles.find("name", "🎈│Our Team");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

message.guild.createChannel('⭐│VOİCE CHATS│⭐', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`⭐│Voice Chat 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│VOİCE CHATS│⭐")))
 message.guild.createChannel(`⭐│Voice Chat 2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│VOİCE CHATS│⭐")))
 message.guild.createChannel(`⭐│Voice Chat 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "⭐│VOİCE CHATS│⭐")))

message.guild.createChannel('🎵│MÜZİK ODALARI│🎵', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎵│Listen Music 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎵│MÜZİK ODALARI│🎵")))
 message.guild.createChannel(`🎵│Listen Music 2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎵│MÜZİK ODALARI│🎵")))
 message.guild.createChannel(`🎵│Listen Music 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎵│MÜZİK ODALARI│🎵")))
        
message.guild.createChannel('📌│ÖZEL ODALAR│📌', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`📌│Private Chat 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📌│ÖZEL ODALAR│📌")))
 message.guild.createChannel(`📌│Private Chat 2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "📌│ÖZEL ODALAR│📌")))
 message.guild.createChannel(`📌│Private Chat 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📌│ÖZEL ODALAR│📌")))
     
message.guild.createChannel('🎮│OYUN ODALARI│🎮', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮│Game Chat 1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮│OYUN ODALARI│🎮")))
 message.guild.createChannel(`🎮│Game Chat 2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎮│OYUN ODALARI│🎮")))
 message.guild.createChannel(`🎮│Game Chat 3`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮│OYUN ODALARI│🎮")))
  
message.guild.createChannel('🎤│AFK NO TALK│🎤', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎤│Afk No Talk`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎤│AFK NO TALK│🎤")))
        

      message.guild.createRole({
        name: ' 💼│Good Founder',
        color: 'ff0000',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: '🔱│Management',
        color: 'BLACK',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: '👑│Authority',
        color: 'ffab00',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })
   
      message.guild.createRole({
        name: '✨│Sub-Authorized',
        color: 'ffffff',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })

      message.guild.createRole({
        name: '🧢│Support',
        color: '00a09b',
      })

      message.guild.createRole({
        name: '📌│Moderator',
        color: '66ff54',
      })

      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })

      message.guild.createRole({
        name: '🎈│Our Team',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🎵│The Beautiful Sound Of Music',
        color: 'ORANGE',
      })

      message.guild.createRole({
        name: '📸│Master Of Photography',
        color: 'ORANGE',
      })

      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })

      message.guild.createRole({
        name: '🎀│Daughters',
        color: '912479',
      })

      message.guild.createRole({
        name: '⭐│Our Members',
        color: '0005c5',
      })

      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })

      message.guild.createRole({
        name: '📌│Ban Authority',
        color: '000000',
        permissions: [
            "MUTE_MEMBERS",
            "BAN_MEMBERS"
   ]
      })

      
      message.guild.createRole({
        name: '📌│Kick Authority',
        color: '000000',
        permissions: [
            "MUTE_MEMBERS",
            "KICK_MEMBERS"
    ]
      })
      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })
      message.guild.createRole({
        name: '📌│REC-ND.',
        color: 'ffffff',
      })
      message.guild.createRole({
        name: '•••••••••••••••••••••',
        color: '000000',
      })
    
    message.channel.send("Gerekli Odalar Kuruldu! REC-ND Teşekkürler..")
     
            })   
    
}

});

//////////////////////

client.on("guildMemberAdd", user => {
var mesaj = db.fetch(`sunucular.${user.guild.id}.yenm`)
var ymesaj = db.fetch(`sunucular.${user.guild.id}.yenmesaj`)
if(user.guild.id === "264445053596991498") return;
  if(!mesaj) return;
  if(!ymesaj) ymesaj = "Sunucumuza Hoş Geldin"
  user.send(ymesaj)

})