/*CMD
  command: /secretpanel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 🔐 secret panel
CMD*/

let ms= User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var b =[
[{title:"⚙ Main Settings",command:"/adminmainsettings01"},{ title:"👤 User Settings",command:"/adminusersettings01"}],
[{title:"📡 Mass Message",command:"/adminmassmessage01"},{title:"🔧 Bot Settings",command:"/adminbotsettings01"}],
[{title:"👨🏻‍💻 Bot Details",command:"/adminbotdetails01"},{title:" 🔒 Log Out",command:"/adminlogoutpan01"}]]

var b5 =[
[{text:"⚙ Main Settings",callback_data:"/adminmainsettings01"},{ text:"👤 User Settings",callback_data:"/adminusersettings01"}],
[{text:"📡 Mass Message",callback_data:"/adminmassmessage01"},{text:"🔧 Bot Settings",callback_data:"/adminbotsettings01"}],
[{text:"👨🏻‍💻 Bot Details",callback_data:"/adminbotdetails01"},{text:" 🔒 Log Out",callback_data:"/adminlogoutpan01"}]]

if(params=="r"){
let yu='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+' '+"<b>Select And Option that  you want to manage your bot</b>"
Api.editMessageText({chat_id:chat.chatid,text:yu,message_id:ms,parse_mode:"html",reply_markup: {inline_keyboard:b5 } })
}else{
Api.deleteMessage({chat_id: user.telegramid,message_id:ms})
Bot.sendInlineKeyboard(b,"Select And Option that  you want to manage your bot",{on_result:"/settatt"})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
}else{
return}
