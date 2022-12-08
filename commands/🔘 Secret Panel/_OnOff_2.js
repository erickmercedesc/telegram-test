/*CMD
  command: /OnOff_2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("mode",params,"string")
var b = [[{text: "✅ On", callback_data: "/OnOff_2 ✅ On"},{text: "❌ Off", callback_data: "/OnOff_2 ❌ Off"}],
[{text: "⬅️ Back To All Settings", callback_data: "/adminmainsettings01"}]]
let text = "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n⚙️ Current Mode:* _"+params+"_"

Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
return
}
