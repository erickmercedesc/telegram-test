/*CMD
  command: /adminchangeinvestmentplan01
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
var btn = [[{title: "⬅️ Back To Sittings", command: "/admininvestmentplan01"}]]

Bot.editMessage("*➡️ Send Me Number Of Minimum Investment Plan.*",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/adminchangepercentagesettup01")
}else{
return}
