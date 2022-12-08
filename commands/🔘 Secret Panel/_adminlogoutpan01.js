/*CMD
  command: /adminlogoutpan01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ms = User.getProperty("adminmsgid")
Api.deleteMessage({chat_id: user.telegramid,message_id:ms})
