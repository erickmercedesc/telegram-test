/*CMD
  command: /adminsetmustjoinchann1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
let f = message
if(chat.chatid==admin){
Bot.setProperty("mustjoinstatus","en","string")
Bot.setProperty("mustjoin",f,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var btn =[
[{title:"⬅️ Back To Settings",command:"/adminmainsettings01"}]]
Bot.editMessage("*Must Join* settings updated to\n["+f+"]",id)&Bot.editInlineKeyboard(btn,id)
}else{
return}
