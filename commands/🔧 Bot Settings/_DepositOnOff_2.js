/*CMD
  command: /DepositOnOff_2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š§ Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("DepositMode",params,"string")
var b = [[{text:"š Minimum Deposit",callback_data:"/adminmindepo01"},{text:"š Maximum Deposit",callback_data:"/adminmaxdepo01"}],[{text: "ā On", callback_data: "/DepositOnOff_2 ā On"},{text: "ā Off", callback_data: "/DepositOnOff_2 ā Off"}],[{text:"ā¬ļø Back To Sittings", callback_data:"/adminbotsettings01"}]]
let text = "*šāšØ Edit Deposit Options In General.\n\nāļø Current Mode:* _"+params+"_"

Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
return
}
