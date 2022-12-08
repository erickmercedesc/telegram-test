/*CMD
  command: /unban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = params
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("banuser"+id,"unbanned","string")
Bot.sendMessageToChatWithId(admin,"✅ User "+" ["+id+"]"+"(tg://user?id="+id+")"+" has been UnBanned successfully")
}
