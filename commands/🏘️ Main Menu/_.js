/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!request){
return
}
let message = request.text
let way1 = User.getProperty("is_sup")
if(way1){
if(!message){
return
}
let Set_Support_User_ID = Bot.getProperty("Set_Support_User_ID")
if(!Set_Support_User_ID){
return
}
let User_ID = Set_Support_User_ID
var User_Info = Bot.getProperty("user_info"+User_ID)
let First_Name = User_Info.first_name
let Mention_Name = '<a href="tg://user?id='+User_ID+'">'+First_Name+'</a>'
let text = "<b>✅ Support Reply Sent To Successfully\nFor:</b> "+Mention_Name+" | <code>"+User_ID+"</code>\n<b>Message:</b> <i>"+message+"</i>"
Api.sendMessage({chat_id:chat.chatid, text:text, parse_mode:"html", reply_to_message_id: request.message_id })
let text2 = "<b>📩 New Support Message From Admin:\nMessage:</b> <i>"+message+"</i>"
Api.sendMessage({chat_id:Set_Support_User_ID, text:text2, parse_mode:"html"})
User.setProperty("is_sup",false,'boolean')
return
}

let way02 = User.getProperty("is_support_admin")
if(way02){
if(message.length<7){
Bot.sendKeyboard("⬅️ Return","*Send please a longer message! Try to explain as much as you can in a single message*")
return
}
let admin = Bot.getProperty("adminlogin")
let text3 = "<b>✅ Message Sent To The Administrator:\nMessage:</b> <i>"+message+"</i>"
Api.sendMessage({chat_id:chat.chatid, text:"<b>✅ Message Sent To The Administrator:\nMessage:</b> <i>"+message+"</i>", parse_mode:"html"})
let Mention ='<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
var btn = [[{text:"Reply Chat", callback_data: "/Secret_Send_Support_To_User " +user.telegramid }]]
var text4 = "<b>📩 New Support Message\nFrom:</b> "+Mention+" | <code>"+user.telegramid+"</code>\n<b>Message:</b> <i>"+message+"</i>"
Api.sendMessage({chat_id:admin, text:text4, parse_mode:"html", disable_web_page_preview:true, reply_markup:{ inline_keyboard: btn }})
User.setProperty("is_support_admin",false,"boolean")
return
}

