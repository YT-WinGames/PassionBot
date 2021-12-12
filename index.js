const Discord = require("discord.js");
console.clear();


const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });
const prefix = "!!"
const messages = [
    "Did you know? All coding languages when ran convert into binary. This is print(“Hi”) in binary 01110000 01110010 01101001 01101110 01110100 00101000 00100010 01001000 01101001 00100010 00101001 Talking in binary? Seems impossible. This is Hi my name is Connor! in binary: 01001000 01101001 00100000 01101101 01111001 00100000 01101110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01000011 01101111 01101110 01101110 01101111 01110010 00100001",
    "Did you know? You can just make a basic function https://onecompiler.com/lua/3xj567bqa this is code that I have made to explain how functions work.",
    "Did you know? HTML is the easiest language to learn? It was designed that way to be easy to learn",
    "Did you know? Javascript is the most common coding language, most apps that you use on a day to day basis are coded using Java. Even this bot is made using a java offspring."
];

const API_Token = process.env.API_Token;

client.on("ready", () => console.log("Bot is online!"))


client.on('message', message => {
    

    if(message.content === 'Information')
    message.reply('Hello! Im a bot, a bot is something that automatically does a function when called on and is coded by the "Creator"\nI was coding inside of Visual Studio Code witch is one of the most popular coding apps if you want more information about it search Visual Studio Code\n This bot was coded in Node.js witch is a javascript based language. Java is the most popular coding language and its code looks something like this "console.log("Message to log")" alot of developers use java because its super powerful and easy to use.\nHope this helped! :)')

    if(message.content === 'Random Fact')
     message.reply(messages[Math.floor(Math.random() * messages.length)])

     if(message.content === 'purge')
     message.channel.bulkDelete(100)


});


client.login(API_Token);
