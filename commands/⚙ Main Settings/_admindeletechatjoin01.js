/*CMD
  command: /admindeletechatjoin01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("mustjoin",undefined,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var btn =[
[{title:"⬅️ Back To Settings",command:"/adminmainsettings01"}]]
Bot.editMessage("The chat has been deleted from the bot's database.",id)&Bot.editInlineKeyboard(btn,id)
}else{
return}
