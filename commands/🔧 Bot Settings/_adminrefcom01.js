/*CMD
  command: /adminrefcom01
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
var btn = [[{title: "⬅️ Back To Sittings", command: "/adminchangerefcom01"}]]

Bot.editMessage("_➡️ Enter The % Of_ *Level°1* _Refferral Commission In Amount._",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/adminchangerefferral%settup01")
}else{
return}
