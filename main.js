const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

client.once('ready', () => {
    console.log('Time to start your sitcom!');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('There are 3 commands: !laugh !laugh1 !laugh2');
    } else if(command == 'laugh'){
        message.channel.send('https://www.youtube.com/watch?v=iYVO5bUFww0&ab_channel=HollywoodLaughTracks')
    } else if(command == 'laugh1'){
        message.channel.send('https://www.youtube.com/watch?v=5gkOozXnDUw&ab_channel=SimplySoundEffects')
    }
});

client.login(TOKEN); //discord will not allow me to post my token :O
