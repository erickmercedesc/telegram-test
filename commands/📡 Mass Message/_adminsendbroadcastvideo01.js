/*CMD
  command: /adminsendbroadcastvideo01
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
if (request.video) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "<b>👨🏻‍💻 Video Transmitted By The Administrator.</b>",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendVideo({ chat_id: User_ID, video: request.video.file_id })
    }
    if (request.caption) {
      Api.sendVideo({
        chat_id: User_ID,
        video: request.video.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
}
} else {
return}
