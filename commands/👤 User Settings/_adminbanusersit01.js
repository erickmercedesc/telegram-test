/*CMD
  command: /adminbanusersit01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminusersettings01"}]]
Bot.editMessage("*➡️ Now send me user telegram id that you want to Ban from blacklist.*",id)
Bot.editInlineKeyboard(b,id)
Bot.runCommand("/adminbanuser02")
}else{
return}
