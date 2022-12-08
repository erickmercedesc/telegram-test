/*CMD
  command: 🎖 Get User Investment History
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: /administht01
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
var btn = [[{title: "⬅️ Back To Sittings", command: "/adminuserhistory01"}]]
Bot.editMessage("*➡️ Send Me The User ID That You Want To Get Investment History.\nFor Example:* `"+user.telegramid+"`",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/htgetaradmin0101")
}else{
return}
