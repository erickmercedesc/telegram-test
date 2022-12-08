/*CMD
  command: /admindeposit01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var cur = Bot.getProperty("DepositMode","✅ On")
var b1=[
[{text:"📉 Minimum Deposit",callback_data:"/adminmindepo01"},{text:"📈 Maximum Deposit",callback_data:"/adminmaxdepo01"}],[{text: "✅ On", callback_data: "/DepositOnOff_2 ✅ On"},{text: "❌ Off", callback_data: "/DepositOnOff_2 ❌ Off"}],[{text:"⬅️ Back To Sittings", callback_data:"/adminbotsettings01"}]]
var b2=[
[{title:"📉 Minimum Deposit",command:"/adminmindepo01"},{title:"📈 Maximum Deposit",command:"/adminmaxdepo01"}],[{title: "✅ On", command: "/DepositOnOff_2 ✅ On"},{title: "❌ Off", command: "/DepositOnOff_2 ❌ Off"}],[{title:"⬅️ Back To Sittings", command:"/adminbotsettings01"}]]
if(params=="r"){
Bot.editMessage("*👁‍🗨 Edit Deposit Options In General.\n\n⚙️ Current Mode:* _"+cur+"_",id)
Bot.editInlineKeyboard(b2,id)
}else{
var text = "<b>👁‍🗨 Edit Deposit Options In General.\n\n⚙️ Current Mode:</b> <i>"+cur+"</i>"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:id,parse_mode:"html",reply_markup: {inline_keyboard:b1 } })
}
}else{
return}
