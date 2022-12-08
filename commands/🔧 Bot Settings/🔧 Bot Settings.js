/*CMD
  command: 🔧 Bot Settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: /adminbotsettings01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b=[
[{text: "🈯️ Investment Plan", callback_data: "/admininvestmentplan01"},{text: "👥 Refferral %", callback_data: "/adminrefferral%01"}],
[{text:"📍 Deposit",callback_data:"/admindeposit01"},{text:"📍 Reinvestment",callback_data:"/adminreinvest01"},{text:"📍 Withdrawal",callback_data:"/adminwithdraw01"}],
[{text:"🎛 Menu Builder",callback_data:"/adminmenubuilder01"}],
[{text:"⬅️ Back To Sittings", callback_data:"/secretpanel r"}]]
var text = "<b>🗣️ Select The Type Of Action You Want To Configure Within The Bot To Allow Or Deny Access To These Actions.</b>"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:id,parse_mode:"html",reply_markup: {inline_keyboard:b } })
}else{
return}
