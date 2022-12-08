/*CMD
  command: /removeAdmin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin","No admin")

if(chat.chatid==1139024599){
if(params){
Bot.setProperty("adminlogin",undefined,"string")
Bot.sendMessage("*✅ Admin Removed Succeed*\n*Removed Admin:* `"+params+"`")
}else{
Bot.sendMessage("invaid format please enter correct format.\n\nFor Example:\n"+"`/removeAdmin 919550970`"+"\n*🦖 Removed Admin:* `"+admin+"`")}}else{
return}
