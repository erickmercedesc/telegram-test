/*CMD
  command: ⚙ Main Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: /adminmainsettings01
CMD*/

let admin = Bot.getProperty("adminlogin")

var btn =[[{text:"📌Currency",callback_data:"/admincurrency01"},{text:"🔒 Coinpayments Key",callback_data:"/admincpjeyset01"}],
[{text:"🛑 Must Join",callback_data:"/adminmastjoin01"},{text:"🔱 Auto Posting",callback_data:"/autopostadmincom01"}],
[{text:"🔘 Maintenance Mode",callback_data:"/adminmaintenancemode01"}],
[{text: "⬅️ Back To All Settings", callback_data:"/secretpanel r"}]]
var id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let text ='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+"<b> Select an option that you want to manage your bot</b>"

Api.editMessageText({chat_id: chat.chatid, message_id: id, parse_mode:"html",text: text,reply_markup:{inline_keyboard:btn}
})
}else{
return}
