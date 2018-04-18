const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const token = '558035018:AAHRmoKtyLUgU6WmqIxUOxhkjuGrrdRxvjY';
const bot = new TelegramBot(token, {polling: true});
const fs=require('fs');
const express = require('express');
var app=express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
bot.on('message', (msg) => {
        if (msg.text.toString().toLowerCase()=="hi")
        {
                bot.sendMessage(msg.chat.id,"Hi "+msg.from.first_name+" 😄");
        }
        else if (msg.text.toString().toLowerCase().includes("bye"))
        {
                bot.sendMessage(msg.chat.id,"ok see you later 😍");
        }
        else if(msg.text=="kevin pietersen")
        {
                bot.sendPhoto(msg.chat.id,"https://www.google.co.in/imgres?imgurl=https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2014/01/10/21/12-Pietersen-gt.jpg&imgrefurl=http://www.independent.co.uk/sport/cricket/kevin-pietersen-seeking-new-ipl-franchise-9092455.html&h=465&w=620&tbnid=jDuhUHsBq3z8FM:&tbnh=150&tbnw=200&usg=__Q5s_QC_mUqlCHmaXQwXk9agbXsY%3D&vet=10ahUKEwjk06P5jb3aAhXKM48KHU0GB0oQ_B0IuAEwDw..i&docid=tFfKfxgOhA_jKM&itg=1&client=ubuntu&sa=X&ved=0ahUKEwjk06P5jb3aAhXKM48KHU0GB0oQ_B0IuAEwDw",{caption:"This is a picture of Kevin Pietersen"});
        }
        else if(msg.text=="kohli")
        {
                bot.sendPhoto(msg.chat.id,"https://www.siasat.com/wp-content/uploads/2017/11/virat-kohli-pti.jpg",{caption:"This is a picture of virat kohli"});
        }


});
bot.onText(/\/sendpic/, (msg) => {
        bot.sendMessage(msg.chat.id, "Which photo do you want",{
                "reply_markup":{
                        "keyboard": [["kevin pietersen", "kohli"]]
                        }
                }
        );
});
bot.onText(/\/link/,(msg)=> {
  bot.sendDocument(msg.chat.id, "https://github.com/prasanth-G24/clouddemo/archive/master.zip");
});
