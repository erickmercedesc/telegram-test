/*CMD
  command: 🗳 Broadcast Poll
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📡 Mass Message
  answer: 
  keyboard: 
  aliases: /adminbroadcastpoll01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b = [[{text:"⬅️ Back To All Settings", callback_data:"/adminmassmessage01"}]]
let text = "*➡️ Enter Your Poll To Broadcast.*"
Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
Bot.runCommand("/adminsendbroadcastpoll01")
}else{
return}
