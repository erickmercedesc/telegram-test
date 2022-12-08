/*CMD
  command: 💸 Add Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: *➡️ Enter Balance Amount For Balance.*
  keyboard: 
  aliases: /adminaddbalance01
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var balance = Libs.ResourcesLib.anotherUserRes("balance", user.telegramid)
balance.add((parseInt(message)))
Bot.sendMessage("*✅ The Balance Has Been Successfully Added To Your Account.*")
}else{
return}
