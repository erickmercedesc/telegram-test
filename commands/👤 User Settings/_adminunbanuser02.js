/*CMD
  command: /adminunbanuser02
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("adminmsgid")
let id = message
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("banuser"+id,"unbanned","string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("✅ User "+"["+id+"]"+"(tg://user?id="+id+")"+" has beed UnBanned successfully",msg)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminusersettings01"}]]
Bot.editInlineKeyboard(b,msg)
}else{
return}
