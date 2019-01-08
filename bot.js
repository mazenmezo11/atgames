
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
  .setDescription(`**شكراََ لك على إضافة البوت إلى سيرفرك**`)
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

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
