/*CMD
  command: /Send_Wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💳 Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("usermsgid")
var cur = Bot.getProperty("cur","⛔️ Not Set")
Bot.editMessage("_✏️ Send Now Your "+cur+" Address To Use It In Future Withdrawals!_",msgid)
Bot.runCommand("/Check_Wallet")

