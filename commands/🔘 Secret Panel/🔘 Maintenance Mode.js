/*CMD
  command: š Maintenance Mode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š Secret Panel
  answer: 
  keyboard: 
  aliases: /adminmaintenancemode01
CMD*/

var id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b = [[{text: "ā On", callback_data: "/OnOff_2 ā On"},{text: "ā Off", callback_data: "/OnOff_2 ā Off"}],
[{text: "ā¬ļø Back To All Settings", callback_data: "/adminmainsettings01"}]]
var cur = Bot.getProperty("mode","ā Off")
let text = "*ā»ļø Select Your Choice To On/Off The Maintainace Mode.\n\nāļø Current Mode:* _"+cur+"_"

Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
}else{
return}
