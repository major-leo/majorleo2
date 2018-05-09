const discord = require("discord.js")

const PREFIX ="&";

const TOKEN = "NDQzNTE3NDY5NDY2OTUxNjkw.DdO34w.O3Q_pymDZXwDtLW-REJsoCw1HxE";

var bot = new discord.Client();

bot.on("ready", function(message) {
    console.log("bot online! leo");
});

bot.on("message", function(message){
    if(message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("pong");
            break;
        case "leo":
            message.channel.sendMessage("the king");
            break;
        case "heather":
            message.channel.sendMessage("Heather is the best and the prettiest");
            break;
        case "invite":
            message.channel.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=443517469466951690&permissions=0&scope=bot");
            break;
        case "help":
            message.channel.sendMessage("&invite to invite to your server");
            break;
        case "hello":
            message.channel.sendMessage("hi, how are you doing");
            break;
        case "fuck":
            message.channel.sendMessage("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
            break;
        case "p":
            message.channel.sendMessage("A CLAPPED PRICK THAT THINKS HE LOOKS COOL (FAKE ASIAN)");
            break;
        case "saam":
            message.channel.sendMessage("smexy saam");
            break;
        case "liv":
            message.channel.sendMessage("SEXY BEAST");
            break;
        case "queen":
            var embed = new discord.RichEmbed()
                .addField("royalty", "Heather is the immortal queen of all unicorns all hail queen heather")
                .setColor(0x00FFFF)
                .setFooter("Heather is practically a goddess")
            message.channel.sendEmbed(embed);
            break;
        case "dont":
            message.channel.sendMessage(message.author.toString() + "**I SAID DONT AT ME FAM**");
            break;
        default:
            message.channel.sendMessage("invalid command");
    }
});
bot.login(TOKEN)