/*CMD
  command: /admingetfullinfouser01
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
var bd = [[{title:"⬅️ Back To Sittings",command:"/adminusersettings01"}]]
Bot.editMessage("*Send Me user id of the user that you want to get full information*\n_if you cant get those user telegram id than forward any message from that user to here_",id)
Bot.editInlineKeyboard(bd,id)
Bot.runCommand("/shsgshsjsh01")
}else{
return}
