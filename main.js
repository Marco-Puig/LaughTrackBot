const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '';

client.once('ready', () => {
    console.log('Time to start your sitcom!');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help')
    {
        message.channel.send('There are ZERO commands: it is all passive!');
        message.channel.send('Make sure to say a good joke :D');
    } 
    else if(command.length >= 30)
    {
        message.channel.send('https://tenor.com/view/laughing-laughing-hysterically-lol-happy-funny-gif-17906572')
    } 
    else if(command.length >= 5)
    {
        message.channel.send('https://tenor.com/view/laughing-mike-tyson-thats-hilarious-clap-laugh-gif-16490572');
    } 
    else if(command.length <= 4)
    {
        message.channel.send('https://tenor.com/view/kirby-gif-23200676');
    }
});

client.login('TOKEN HERE');

