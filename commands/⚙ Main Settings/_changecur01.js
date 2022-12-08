/*CMD
  command: /changecur01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.editMessage("*➡️ Send Me your new currency short code* (EG: TRX)",id)
Bot.runCommand("/newcur01")
}else{
return}
