/*CMD
  command: ๐ค User Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐ค User Settings
  answer: 
  keyboard: 
  aliases: /adminusersettings01
CMD*/

let admin = Bot.getProperty("adminlogin")

var btn =[[{text:"๐จโ๐ฉโ๐งโ๐ฆ All Users Lists",callback_data:"/adminuserlist01"}],
[{text:" ๐ค Get Full Information Of A User",callback_data:"/admingetfullinfouser01"}],[{text: "๐ User History", callback_data: "/adminuserhistory01"}],
[{text:"๐ Check Balance",callback_data:"/admincheckbalance01"},{text:"๐ธ Add Balance", callback_data:"/adminaddbalance01"}],
[{text:"๐ฐ Send Balance",callback_data:"/adminsendbalance01"},{text:"โ๏ธ Remove Balance",callback_data:"/adminremovebalance01"}],
[{text:"โ Unban User",callback_data:"/adminunbanusersit01"},{text:"๐ซ Ban User",callback_data:"/adminbanusersit01"}],
[{text: "โฌ๏ธ Back To All Settings", callback_data:"/secretpanel r"}]]
var id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let text = "<b>Select And Option that  you want to manage your bot</b>"

Api.editMessageText({chat_id: chat.chatid, message_id: id, parse_mode:"html",text: text,reply_markup:{inline_keyboard:btn} })
}else{
return}
