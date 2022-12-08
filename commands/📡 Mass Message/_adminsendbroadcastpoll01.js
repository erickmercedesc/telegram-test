/*CMD
  command: /adminsendbroadcastpoll01
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
var fullBotUsers = Bot.getProperty("bot_users")
if (request.poll) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "<b>👨🏻‍💻 Poll Transmitted By The Administrator.</b>",
    parse_mode: "HTML"
    })
    Api.forwardMessage({
      chat_id: User_ID,
      from_chat_id: user.telegramid,
      message_id: request.message_id
    })
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
  }
}
} else {
return}
