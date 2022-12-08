/*CMD
  command: ✂️ Remove Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: *➡️ Enter The User ID To Reduce The Balance.*
  keyboard: 
  aliases: /adminremovebalance01
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let msg = message
User.setProperty("RemoveBalance", msg, "integer")
Bot.runCommand ("/adminremovebalance02")
}else{
return}
