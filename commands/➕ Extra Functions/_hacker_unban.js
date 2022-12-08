/*CMD
  command: /hacker_unban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ➕ Extra Functions
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
let id = params
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
if(params){
Bot.setProperty("banuser"+id,"unbanned","string")
Bot.sendMessage("✅ User "+"["+id+"]"+"(tg://user?id="+id+")"+" has beed UnBanned successfully")
}else{
return}}
