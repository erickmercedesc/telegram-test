/*CMD
  command: /settatt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("adminmsgid" , msg_id,  "integer");
