const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async (client, msg, args) => {
    if(msg.author.id == "821406507361894484") {   
    msg.channel.send(`**Bot Yeninde Başlatılıyor **:zzz:`).then(msg => {
    msg.edit(`**Bot Aktif**`)
      console.log(`Konsol: Yeniden başlatılıyor...`);
      process.exit(0);
    })}
  if(msg.author.id == "793406104767561798") {   
    msg.channel.send(`**Bot Yeninde Başlatılıyor **:zzz:`).then(msg => {
    msg.edit(`**Bot Aktif**`)
      console.log(`Konsol: Yeniden başlatılıyor...`);
      process.exit(0);
    })}
    msg.channel.send("bunu sadece sahibim kullanabilir")};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 4
};
module.exports.help = {
  name: 'reboot',
  description: 'Şşş!',
  usage: 'reboot'
};