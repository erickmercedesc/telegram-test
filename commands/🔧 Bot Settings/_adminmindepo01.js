/*CMD
  command: /adminmindepo01
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

Bot.editMessage("*➡️ Send Me The Minimum Deposit Amount.*",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/adminmindeposettup01")
}else{
return}
