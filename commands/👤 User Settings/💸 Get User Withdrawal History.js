/*CMD
  command: 💸 Get User Withdrawal History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: /getwdht01admin
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let b = [[{title: "⬅️ Back To Sittings", command: "/adminuserhistory01" }]]
Bot.editMessage("*➡️ Send Me The User ID That You Want To Get Withdrawal History.\nFor Example:* `"+user.telegramid+"`",id)
Bot.editInlineKeyboard(b,id)
Bot.runCommand("/getwdap0101")
}else{
return}
