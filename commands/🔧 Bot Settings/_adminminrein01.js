/*CMD
  command: /adminminrein01
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
var b=[[{title:"⬅️ Back To Settings",command:"/adminreinvest01 r"}]]
Bot.editMessage("*➡️ Send Me The Minimum Reinvestment Amount.*",id)
Bot.editInlineKeyboard(b,id)
Bot.runCommand("/adminminreinsettup01")
}else{
return}
