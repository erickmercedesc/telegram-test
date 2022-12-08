/*CMD
  command: /admingetRefferral01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id= User.getProperty("adminmsgid")
let s=data.message
let geta= Bot.getProperty("activereflistinv"+s)
if(!geta){
User.setProperty("getaih","*📋 No Refferral Earning Records Founded To The User.*","string")
}else{
User.setProperty("getaih",geta,"string")}
let now = User.getProperty("getaih")
if(data.chat.chatid==admin){
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
Bot.editMessage("*👤 User:* [" +s+ "](tg://user?id=" +s+")\n\n"+now,id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/admingetrefferralhistory01"}]]
Bot.editInlineKeyboard(b,id)
}else{
return}
