// importing modules: discord.js, and reading from console
const {Client, GatewayIntentBits} = require('discord.js');
const readLine = require('readline') 

const client = new Client({ // intents are a set of permissions that the bot can use, like recieving messages, access to members names, etc.
    intents: [
        GatewayIntentBits.Guilds, // guilds = server
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready`); // using (`) NOT )(')
});

client.on('messageCreate', async (message) => {
    const channel = message.guild.channels.cache.get('1176246282617102370');
    if(message.content.toLowerCase() == 'active?'){
        channel.send('Active');
    }
});

client.login('MTE3NjI0NTk0NTY5NzA1NDc5MA.Gbi9MB.JHQg2im4VBrCpnQZ7RfnGjBkvg3JGA9AEsDAeY');
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (to bypass the policy preventing use of nodemon)