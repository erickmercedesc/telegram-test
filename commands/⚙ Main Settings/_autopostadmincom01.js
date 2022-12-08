/*CMD
  command: /autopostadmincom01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let channel = Bot.getProperty("autopost","❌ Disable")
var text = "_Select an option from the buttons bellow_\n\n*Your Current Autoposting Channel:* "+channel+""
var btn =[[{title:"⚙ Enable/Change Current Channel",command:"/autpo90"}],
[{title:"Return ↩️", command:"/adminmainsettings01"}, {title:"⬅️ Back To Settings", command:"/secretpanel r"}]]
Bot.editMessage(text,id)
Bot.editInlineKeyboard(btn,id)
}else{
return}
