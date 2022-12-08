/*CMD
  command: 🔃 Reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔃 Reinvest
  answer: 
  keyboard: 
  aliases: /reinvest, ♻️ reinvest
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let ReinvestMode = Bot.getProperty("ReinvestMode")
if(ReinvestMode == "❌ Off"){
Bot.sendMessage("*⛔️ Reinvestments Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let balance = Libs.ResourcesLib.userRes("balance")
var min = Bot.getProperty("adminmireind01","⛔️ Not Set")
var cur = Bot.getProperty("cur","⛔️ Not Set")
if(balance.value() < min){
Bot.sendMessage("*❌ You Can Not Reinvest Right Now:* _You Need At Least "+min+" "+cur+" To Reinvest!_")
}else{
Bot.sendKeyboard("🔙 Back","*📤 How Many "+cur+" You Want To Re-invest 🔃\n\nMinimum:* `"+min+" "+cur+"`\n*Maximum:* `"+balance.value().toFixed(8)+" "+cur+"`\n\n_Maximum Amount Corresponds To Your Balance_\n\n*➡️ Send Now The Amount Of You Want To Re-invest 🔃*")
}
Bot.runCommand("/NewInv")
