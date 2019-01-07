
const Discord = require('discord.js');
const client = new Discord.Client();
       
client.on('guildMemberAdd', member => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png')
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  member.user.id, true)
    .addField('``تاق العضو``', member.user.discriminator, true)
    .addField('``تم الانشاء في``', member.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =member.guild.channels.find('name', ' (welcome)')
    if (!channel) return;
    channel.send({embed : embed});
    });

        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه شرفتنا ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('#ff0004')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'welcome')
        if (!channel) return;
        channel.send({embed : embed});
        }) 

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
