/*CMD
  command: 📤 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📤 Withdraw
  answer: 
  keyboard: 
  aliases: /withdraw, 💸 withdraw
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let WithdrawMode = Bot.getProperty("WithdrawMode")
if(WithdrawMode == "❌ Off"){
Bot.sendMessage("*⛔️ Withdrawals Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let balance = Libs.ResourcesLib.userRes("balance")
let wallet = User.getProperty("wallet","⛔️ Not Set")
var min = Bot.getProperty("adminminwd01","⛔️ Not Set")
var cur = Bot.getProperty("cur","⛔️ Not Set")
if(wallet==undefined){
Bot.runCommand("/myWallet")
}else{
if (balance.value() <min){
Bot.sendMessage("_❌ You Have To Own At Least "+min+" "+cur+" In Your Wallet To Withdraw!_")
}else{
Bot.sendMessage("*📤 How Many "+cur+" You Want To Withdraw?\n\n▪ Minimum:* `"+min+" "+cur+"`\n*▪ Maximum Bal:* `"+balance.value()+ " "+cur+"`\n\n*▪ The "+cur+" Will Be Sent To The Wallet:* `"+wallet+"`\n\n_Maximum Bal Amount Corresponds To Your Balance_\n\n*➡️ Send Now The Amount Of  You Want To Withdraw*")
Bot.runCommand("/witdpay")
}}
