/*CMD
  command: 👥 Refferral %
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: /adminrefferral%01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","⛔ Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","⛔ Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","⛔ Not set")
var b=[
[{text:" ⚙ Change Refferral Commission %",callback_data:"/adminchangerefcom01"}],[{text:"⬅️ Back To Sittings",callback_data:"/adminbotsettings01"}]]
var text = "<b>✅ Current Refferral Commission  Status:\n\nLevel°1</b> - <i>"+RefCom_LV1+"%</i>\n<b>Level°2</b> - <i>"+RefCom_LV2+"%</i>\n<b>Level°3</b> - <i>"+RefCom_LV3+"%</i>"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:id,parse_mode:"html",reply_markup: {inline_keyboard:b } }) 
}else{
return }
