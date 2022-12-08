/*CMD
  command: /adminsendbroadcastmessage01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📡 Mass Message
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
var fullBotUsers = Bot.getProperty("bot_users")
if (message.length > 1000) {
  Bot.sendMessage("_⚠️ This Message Cannot Be Transmitted Because It Is Too Long, The Maximum Is 1000 Characters._")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  var User_ID = info.id
  Api.sendMessage({
    chat_id: User_ID,
    text: "Message Transmitted By The Administrator.\n<code>━━━━━━━━━━━━━━━━━</code>\n" +
      message +
      "\n<code>━━━━━━━━━━━━━━━━━</code>",
    parse_mode: "HTML"
  })
}
} else {
return}
