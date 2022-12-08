/*CMD
  command: ⚠️ Restore Data Bot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: /adminrestoredatabot01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b = [[{text:"✅ Confirm", callback_data:"/adminconfirmrestoredatabot01"},{text:"❌ Cancel", callback_data:"/admincancelrestoredatabot01"}],
[{text:"⬅️ Back To Sittings", callback_data:"/adminbotdetails01"}]]

let txt = "*⁉️ You Are Sure You Want To Delete All The Bot's Data, This Includes The Following:*"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
}else{
return}
