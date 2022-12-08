/*CMD
  command: 👨🏻‍💻 Bot Details
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: /adminbotdetails01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var btn = [[{text: "ℹ️ Complete Bot Info", callback_data: "/admincompletebotinfo01"},{text:"⚠️ Restore Data Bot",callback_data:"/adminrestoredatabot01"}],
[{text:"Tranfer Bot",callback_data:"/admintransferbot01"},{text:"⬅️ Back To All Settings",callback_data:"/secretpanel r"}]]
var text = "You Are Sure You Want To Delete All The Bot's Data, This Includes The Following:"
Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:btn},disable_web_page_preview:true})
}else{
return}
