/*CMD
  command: /usermsgid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💳 Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("usermsgid" , msg_id,  "integer");
