/*CMD
  command: 🈯️ Investment Plan
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: /admininvestmentplan01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b=[
[{text: "🔋 Change Investment Plan", callback_data: "/adminchangeinvestmentplan01"}],[{text:"⌛ Change Expired Date",callback_data:"/adminchangeexpireddate01"}],[{text:"⬅️ Back To Sittings", callback_data:"/adminbotsettings01"}]]
var text = "<b>🗣️ Select The Type Of Action You Want To Configure Within The Bot To Allow Or Deny Access To These Actions.</b>"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:id,parse_mode:"html",reply_markup: {inline_keyboard:b } })
}else{
return}
