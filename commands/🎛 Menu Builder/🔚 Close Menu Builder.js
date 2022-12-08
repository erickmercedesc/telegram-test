/*CMD
  command: 🔚 Close Menu Builder
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🎛 Menu Builder
  answer: 
  keyboard: 
  aliases: /adminclosemenubuilder01
CMD*/

Api.deleteMessage({chat_id: user.telegramid,message_id:request.message.message_id})
