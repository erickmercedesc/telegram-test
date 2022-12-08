/*CMD
  command: /adminchangerefferral%settup03
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
var b =[
[{title:"🔄 Try Again",command:"/adminrefferral%03"}]]
Bot.editMessage("*📛 Invaild Value. Enter Only Numberic Value. Try Again*",id)
Bot.editInlineKeyboard(b,id)
return
}
Bot.setProperty("RefCom_LV3", message,"string")
var refbonus = message/100
Bot.setProperty("RefCom%03", refbonus,"string")
var b2 =[
[{title:"⬅️ Back To Sittings",command:"/adminchangerefcom01"}]]
Bot.editMessage("*Level°3* Refferral Commission Updated To "+message+"%",id)
Bot.editInlineKeyboard(b2,id)
}else{
return }
