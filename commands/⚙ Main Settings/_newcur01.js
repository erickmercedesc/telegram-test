/*CMD
  command: /newcur01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = message.toUpperCase()
let id = User.getProperty("adminmsgid")
let admin =Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
Bot.setProperty("cur",cur,"string")
Bot.editMessage("✅ Currency updated to "+cur,id)
var bd=[
[{title:"⬅️ Back To Sittings",command:"/adminmainsettings01"}]]
Bot.editInlineKeyboard(bd,id)
}else{
return}
