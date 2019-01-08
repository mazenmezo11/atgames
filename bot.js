
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

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['w.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 540, 230);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '21px kathen';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 240, 150);
                              
                              //NAMEً
                              ctx.font = '21px kathen';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
