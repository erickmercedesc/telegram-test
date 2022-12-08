/*CMD
  command: ❌ Cancel Restore Data Bot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: /admincancelrestoredatabot01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b = [[{text:"⬅️ Back To Sittings", callback_data:"/adminbotdetails01"}]]

let txt = "*👁‍🗨 The Previous Operation Has Been Canceled.*"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
}else{
return}
