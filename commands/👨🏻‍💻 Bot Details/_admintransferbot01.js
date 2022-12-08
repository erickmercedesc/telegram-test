/*CMD
  command: /admintransferbot01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b=[
[{text:"⬅️ Back To Sittings", callback_data:"/adminbotdetails01"}]]
let txt = "*📩 Enter The Email Address Of The User To Whom The Bot Will Be Transferred.*"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
Bot.runCommand("/admintransferbot02")
}else{
return}
