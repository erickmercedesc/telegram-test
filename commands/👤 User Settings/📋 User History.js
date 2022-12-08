/*CMD
  command: 📋 User History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: /adminuserhistory01
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
var b=[
[{text:"🎖 Get User Investment History",callback_data:"/administht01"}], [{text:"💸 Get User Withdrawal History",callback_data:"/getWdht01admin"}],
[{text:"👬 Get User Refferral Earning History",callback_data:"/admingetrefferralhistory01"}],
[{text:" ⬅️ Back To Sittings",callback_data:"/adminusersettings01"}]]

var i="*🗣️ Select And Way Of Getting User History. You Can Get Any User Investment And Withdrawal History By Entering User ID. User Must Need To Start Bot.*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:i,parse_mode:"markdown",reply_markup:{inline_keyboard:b}})
}else{
return }
