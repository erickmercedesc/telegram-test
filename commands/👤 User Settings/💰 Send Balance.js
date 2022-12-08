/*CMD
  command: 💰 Send Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: *➡️ Send User ID To Change Their Balance.*
  keyboard: 
  aliases: /adminsendbalance01
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let msg = message
User.setProperty("SendBalance", msg, "integer")
Bot.runCommand ("/adminsendbalance02")
}else{
return}
