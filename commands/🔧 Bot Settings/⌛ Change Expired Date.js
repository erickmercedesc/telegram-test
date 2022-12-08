/*CMD
  command: ⌛ Change Expired Date
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: /adminchangeexpireddate01
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
var b = [[{title: "⬅️ Back To Settings", command: "/admininvestmentplan01"}]]
Bot.editMessage("➡️ Enter The Number Of Days The Investment Plan Ends.",id)
Bot.editInlineKeyboard(b,id)
Bot.runCommand("/runcom01")
}else{
return
}
