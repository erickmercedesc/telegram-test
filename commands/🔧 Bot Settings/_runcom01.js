/*CMD
  command: /runcom01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
if(!isNumeric(message)){
var b1 = [[{title: "🔄 Try Again", command: "/adminchangeexpireddate01" }]]
Bot.editMessage("*❌ Invaild Value.*  _Enter In Numberic Value. Try Again_",id)
Bot.editInlineKeyboard(b1,id)
return
}
var Hours = message*24
var Secs = message*86400
Bot.setProperty("daily_expired",message,"integer")
Bot.setProperty("daily_hour1",Hours,"string")
Bot.setProperty("daily_expired_Time",Secs,"integer")

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*✅ Investment Plan Day Updated Successfully\n\nDays:* `"+message+"`\n*Hours:* `"+Hours+"`\n*Seconds:* `"+Secs+"`",id)
var b2=[
[{title:"⬅️ Back To Settings",command:"/admininvestmentplan01"}]]
Bot.editInlineKeyboard(b2,id)
}
