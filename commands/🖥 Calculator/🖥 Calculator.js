/*CMD
  command: 🖥 Calculator
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🖥 Calculator

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: /calculator
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var cur = Bot.getProperty("cur","⛔️ Not Set")
Bot.sendKeyboard("⬅️ Return","🖥* Profit Calculator *🖥\n\n_⚜️ Calculate Here Your Incoming Profits!_\n\n*➡️ Send The Amount Of "+cur+" You Want To Invest!*")
Bot.runCommand("/Calculator_Result_USD")
