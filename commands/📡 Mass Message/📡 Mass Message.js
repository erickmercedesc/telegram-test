/*CMD
  command: 📡 Mass Message
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📡 Mass Message
  answer: 
  keyboard: 
  aliases: /adminmassmessage01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b = [[{text: "🤑 Broadcast Paid Advertisinge", callback_data: "/adminbroadcastpaidadvertisinge01"}],
[{text: "📝 Broadcast Message", callback_data: "/adminbroadcastmessage01"},{text: "📸 Broadcast Photo", callback_data: "/adminbroadcastphoto01"}],
[{text: "📼 Broadcast Video", callback_data: "/adminbroadcastvideo01"},{text: "🖼 Broadcast Sticker", callback_data: "/adminbroadcaststicker01"}],
[{text: "🗂 Broadcast Document", callback_data: "/adminbroadcastdocument01"},{text: "🗳 Broadcast Poll", callback_data: "/adminbroadcastpoll01"}],
[{text: "🎧 Broadcast Audio", callback_data: "/adminbroadcastaudio01"},{text: "🎤 Broadcast Voice", callback_data: "/adminbroadcastvoice01"}],
[{text: "⬅️ Back To All Settings", callback_data: "/secretpanel r"}]]
let text = "Select a message reciver. You can Send Global or private message anytime.\n- Kindly Select an option."

Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
}else{
return}
