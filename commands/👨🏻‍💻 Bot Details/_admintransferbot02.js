/*CMD
  command: /admintransferbot02
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user_email = message.toLowerCase()
let id = User.getProperty("adminmsgid")
let admin =Bot.getProperty("adminlogin")
if(chat.chatid==admin){

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(user_email)) {
var bd = [[{title:"🔁 Try Again",command:"/admintransferbot01"}]]
  Bot.editMessage("*⚠️ Not A Valid Email Please Enter A Valid Email.*",id)
  Bot.editInlineKeyboard(bd,id)
  return
}
BBAdmin.installBot({ email: user_email, bot_id: bot.id, token: "❤️ Thank You For Installing Me In Your Application.\nYou Can Paste Your API TOKEN Here!" })
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
Bot.editMessage("*✅ The Bot Has Been Transferred To The Following Email Address:*\n`"+user_email+"`",id)
var bd1 = [[{title:"⬅️ Back To Sittings",command:"/secretpanel r"}]]
Bot.editInlineKeyboard(bd1,id)
}else{
return
}
