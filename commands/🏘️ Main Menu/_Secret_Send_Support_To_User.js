/*CMD
  command: /Secret_Send_Support_To_User
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
return
}
Bot.sendMessage("*➡️ Now Send Your Message For Reply This Support Ticket.*",{reply_to_message_id:request.message.message_id})
User.setProperty("Set_Support_User_ID",params,"string")
User.setProperty("is_sup",true,'boolean')
