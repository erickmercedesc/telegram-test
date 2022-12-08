/*CMD
  command: /onCheckJoin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: 
CMD*/

let mustjoin = Bot.getProperty("mustjoin")

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/Loading_Menu")
User.addToGroup("user")
}

if (user=="left"){
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [{ title : "✅ Joined" , command : "/start" }]
Bot.sendInlineKeyboard(button , "*💡 To Use This Bot You Must Join This Channel: "+mustjoin+"*")
}
