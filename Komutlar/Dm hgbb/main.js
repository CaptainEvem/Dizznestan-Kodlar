client.on("guildMemberAdd",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Sunucusuna Hoşgeldin!')
  .setDescription(`Umarım sunucumuzda eğlenirsin! İyi vakit geçirmen dileği ile...`)
  .setFooter('Hoşgeldin')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});
////////////////////
client.on("guildMemberRemove",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Görüşürüz!')
  .setDescription(`Umarım bizimle vakit geçirirken mutlu olmuşsundur!`)
  .setFooter('Görüşürüz')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});