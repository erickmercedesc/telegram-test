/*CMD
  command: /addAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin =Bot.getProperty("adminlogin",user.telegramid)

if(chat.chatid==admin){
Bot.setProperty("adminlogin",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("*✅ Admin Added Succeed*\n*Current Admin:* `"+message+"`")
}else{
Bot.sendMessage("invaid format please enter correct format.\n\nFor Example:\n`/addAdmin "+user.telegramid+"`\n*🦖 Current Admin:* `"+admin+"`")
return}
