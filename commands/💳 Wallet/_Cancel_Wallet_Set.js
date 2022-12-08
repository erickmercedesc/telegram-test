/*CMD
  command: /Cancel_Wallet_Set
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💳 Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("usermsgid")
Api.deleteMessage({chat_id:chat.chatid,message_id:msgid})
