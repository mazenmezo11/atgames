
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

client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith('#' + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
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
 
  if (command == "طرد") {
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


 client.on('message', message => {

 var ms = require('ms')

 var moment = require('moment');

 var prefix = "#"
  
 if (message.author.x5bz) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://d.top4top.net/p_10880lo1r1.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
  
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }  

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {
  
  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})

  setTimeout(() => {

  message.guild.unban(user);
  
  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')
 
  var moment = require('moment');
 
  var prefix = "#"
   
  if (message.author.x5bz) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");

  let embed = new Discord.RichEmbed()
 
 .setImage("https://c.top4top.net/p_108825enp1.png")
 
  if (command == "mute") {
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
   });

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
