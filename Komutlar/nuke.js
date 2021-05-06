const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek. \n https://github.com/Nober-Freelance-Coders/Dizznestan-Kodlar/");
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturur.',
  usage: 'nuke'
};   //Nober Botlist- Dizzness` 🎄 
