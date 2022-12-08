/*CMD
  command: /adminmaxdepo01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var btn = [[{title: "⬅️ Back To Sittings", command: "/admindeposit01"}]]

Bot.editMessage("*➡️ Send me the maximum Deposit amount.*",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/adminmaxdeposettup01")
}else{
return}
