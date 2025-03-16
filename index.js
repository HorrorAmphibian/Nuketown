require('dotenv').config();
const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const PREFIX = process.env.PREFIX;

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} is online!`);
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'nuke') {
        if (!message.member.permissions.has([
            PermissionsBitField.Flags.Administrator,
            PermissionsBitField.Flags.ManageGuild,
            PermissionsBitField.Flags.ManageChannels,
            PermissionsBitField.Flags.ManageMessages
        ])) {
            return message.reply('You do not have permission to use this command.');
        }

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;

        if (channel.managed || channel.parentId === message.guild.rulesChannelId || 
            channel.parentId === message.guild.publicUpdatesChannelId || 
            channel.id === message.guild.systemChannelId) {
            return message.reply('This channel is necessary for the server community and cannot be deleted.');
        }

        try {
            await channel.clone();
            await channel.delete();
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while trying to nuke the channel.');
        }
    }
});

client.login(process.env.TOKEN);