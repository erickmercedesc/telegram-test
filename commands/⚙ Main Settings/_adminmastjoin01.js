/*CMD
  command: /adminmastjoin01
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
let mustjoin = Bot.getProperty("mustjoin")
if(chat.chatid==admin){
if(mustjoin==undefined){
var btn = [[{title:"⬅️ Back To All Settings",command:"/adminmainsettings01"}]]
Bot.editMessage("⚠️ Bot must be admin of the channel else bot will not work properly\n\n🔻 Send me @ channel username ",id)
Bot.editInlineKeyboard(btn,id)
Bot.runCommand("/adminsetmustjoinchann1")
}else{
var btn = [[{title:"🗑 Delete Channel",command:"/admindeletechatjoin01"}],[{title:"⬅️ Back To All Settings",command:"/adminmainsettings01"}]]
Bot.editMessage("⚠️ Bot must be admin of the channel else bot will not work properly\n\n🔻 Channel: "+mustjoin+"",id)
Bot.editInlineKeyboard(btn,id)
}}else{
return}
