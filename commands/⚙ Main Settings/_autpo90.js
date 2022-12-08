/*CMD
  command: /autpo90
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var btn =[[{title:"⬅️ Back To Settings", command:"/autopostadmincom01"}]]
let text = "_Now forward any message from your channel that you want to do autoposting._\n🚩 *NOTE:* Bot must need to be admin of the channel"
Bot.editMessage(text,id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/sshhx716zhhz01")
}else{
return}
