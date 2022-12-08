/*CMD
  command: /commandforsetkeyinprivcoinpayments017
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔒 Coinpayments Key
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let k=message
if(!message){
Bot.sendMessage("!*Invaild Private key. Try again*")
return
}
Bot.setProperty("cp_privatekey01", message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("_Now send me your coinpayments_ *PUBLIC KEYS*",{on_result:"/settatt"})
Bot.runCommand("/setkeyforpublicincoinpauyments")
}else{
return}
