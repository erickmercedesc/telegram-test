/*CMD
  command: đ¤ Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: đ¤ Withdraw
  answer: 
  keyboard: 
  aliases: /withdraw, đ¸ withdraw
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let WithdrawMode = Bot.getProperty("WithdrawMode")
if(WithdrawMode == "â Off"){
Bot.sendMessage("*âī¸ Withdrawals Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "â On"){
Bot.sendMessage("*đ  Maintenance In Progress!*\n\n_âĒī¸ Bot Administration Does Some Technical Work Within This Bot.\nâĒī¸ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nâĒī¸ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_â đ Secret Panel | â Main Settings | đ Maintenance Mode_\n\n*For The Users:*\n_âšī¸ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let balance = Libs.ResourcesLib.userRes("balance")
let wallet = User.getProperty("wallet","âī¸ Not Set")
var min = Bot.getProperty("adminminwd01","âī¸ Not Set")
var cur = Bot.getProperty("cur","âī¸ Not Set")
if(wallet==undefined){
Bot.runCommand("/myWallet")
}else{
if (balance.value() <min){
Bot.sendMessage("_â You Have To Own At Least "+min+" "+cur+" In Your Wallet To Withdraw!_")
}else{
Bot.sendMessage("*đ¤ How Many "+cur+" You Want To Withdraw?\n\nâĒ Minimum:* `"+min+" "+cur+"`\n*âĒ Maximum Bal:* `"+balance.value()+ " "+cur+"`\n\n*âĒ The "+cur+" Will Be Sent To The Wallet:* `"+wallet+"`\n\n_Maximum Bal Amount Corresponds To Your Balance_\n\n*âĄī¸ Send Now The Amount Of  You Want To Withdraw*")
Bot.runCommand("/witdpay")
}}
