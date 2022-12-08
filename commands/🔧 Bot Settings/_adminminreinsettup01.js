/*CMD
  command: /adminminreinsettup01
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
Bot.setProperty("adminmireind01",message,"string")
Bot.editMessage("✅ Minimum Reinvestment Successfully Updated To "+message,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminreinvest01"}]]
Bot.editInlineKeyboard(b,id)
}else{
return}
