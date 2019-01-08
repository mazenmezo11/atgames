
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", async  => {
  setInterval(function(){
  client.channels.find('id', '531980235785240604').setName("W");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("We");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Wel");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welc");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welco");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcom");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome T");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To A");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To Ap");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To Ape");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To ApeT");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To ApeTr");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To ApeTry");//Toxic Codes
  client.channels.find('id', '531980235785240604').setName("Welcome To ApeTryl");//Toxic Codes
    }, 4000);
  });
     

    var prefix = '#'
client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراََ لك على إضافة البوت إلى سيرفرك | This Bot Made By Omar M. El-Sisy**`)
      guild.owner.send(embed)
});

      client.on('message', message => {
        if (message.content === "#inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`ِA.T SYSTEM BOT©`, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here.. !`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=531854335991087107&permissions=0&scope=bot`)      
     message.channel.sendEmbed(embed);
       }
   });


client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {//Toxic Codes
    message.reply("لا أستطيع المساعدة.. أنا مجرد روبوت :slight_smile: ");
    }
});

client.on("message", (message) => {//Toxic Codes
   if (message.content.startsWith("#new")) {//Toxic Codes  
        const reason = message.content.split(" ").slice(1).join(" ");    
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {//Toxic Codes
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {//Toxic Codes
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {//Toxic Codes
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {//Toxic Codes
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("*close")) {//Toxic Codes
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`*confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '*confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })    
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on('message', message => {
    var prefix = "#"
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "بان") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);


  message.channel.send(`✅  ${user} إلبس بان :upside_down:   ✈    `)
}
});

client.on("message", msg => {
  if(msg.content === '#' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

var prefix = "#"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);//Narox
 
  if (command == "كيك") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");//Narox
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");//Narox
 
  message.guild.member(user).kick();//Narox
 
  const kickembed = new Discord.RichEmbed()//Narox
  .setAuthor(`تم الطرد`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()//Narox
  .addField("**الشخص:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({//Narox
    embed : kickembed
  })//Narox
}
});

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
