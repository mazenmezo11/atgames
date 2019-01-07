
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('message', dark => {
    
    if (dark.content === "APETRYL") {
        setInterval(function(){
        dark.edit('**A**')    
        dark.edit('**AP**')    
        dark.edit('**APE**')
        dark.edit('**APET**')
        dark.edit('**APETR**')
        dark.edit('**APETRY**')
        dark.edit('**APETRYL*')
        }, 900)
    }
    
})

client.login('NTMxODU0MzM1OTkxMDg3MTA3.DxUH5w.Er9zZouaPrzngzlCQeR3MKVsZjs');
