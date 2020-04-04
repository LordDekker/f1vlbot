const Discord = require('discord.js');
const jeff = new Discord.Client();
const config = require('./config.json');
const links = require('./links.json');

jeff.login(process.env.BOT_TOKEN);

jeff.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('651383334529925124').send( 'Seja bem-vindo <@' + member.user.id+ '> à F1VL BR. Não esqueça de olhar <#' + member.guild.channels.cache.get('651449449020653569') + '> e <#' + member.guild.channels.cache.get('651385064835252235') + '>. Deixe o link da sua conta da steam em <#' + member.guild.channels.cache.get('651463710975721473') + '> e nos siga nas redes sociais acessando <#' + member.guild.channels.cache.get('651460785750409255') + '> ou digitando !twitch e !insta . Qualquer dúvida coloque no canal <#' + member.guild.channels.cache.get('651791496516993064') + '> ou mande mensagem para algum <@&651385495942594566>');
});

jeff.on('ready', () => {
    jeff.user.setActivity('F1 2019');
    console.log('Pronto');
});

jeff.on('message', async message => {
    responseObejct = links;
    if(responseObejct[message.content]){
        message.channel.send(responseObejct[message.content]);
}});
