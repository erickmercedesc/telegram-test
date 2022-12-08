/*CMD
  command: /adminchangerefcom01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
var lv1 = Bot.getProperty("RefCom_LV1", "⛔ Not Set")
var lv2 = Bot.getProperty("RefCom_LV2","⛔ Not Set")
var lv3 = Bot.getProperty("RefCom_LV3","⛔Not Set")
let x= user.first_name+" Select an option that you want to manage. Click on the buttons bellow to channel Refferral Commission *%*"

var b=[
[{title:"Level°1 - "+lv1+"%",command:"/adminrefcom01"}],
[{title:" Level°2 - "+lv2+"%", command:"/adminrefcom02"}],
[{title:" Level°3 - "+lv3+"%", command:"/adminrefcom03"}],
[{title:"⬅️ Back To Settings",command:"/adminrefferral%01"}]]

Bot.editMessage(x,id)
Bot.editInlineKeyboard(b,id)
}else{
return}
