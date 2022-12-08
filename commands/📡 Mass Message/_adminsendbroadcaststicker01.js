/*CMD
  command: /adminsendbroadcaststicker01
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
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "<b>👨🏻‍💻 Sticker Transmitted By The Administrator.</b>",
    parse_mode: "HTML"
    })
    Api.sendSticker({ chat_id: User_ID, sticker: request.sticker.file_id })
  }
}
} else {
return}
