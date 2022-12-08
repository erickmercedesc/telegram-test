/*CMD
  command: 📥 Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📥 Deposit
  answer: 
  keyboard: 
  aliases: /deposit, 💵 deposit
CMD*/

let bannnk = Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let DepositMode = Bot.getProperty("DepositMode")
if(DepositMode == "❌ Off"){
Bot.sendMessage("*⛔️ Deposits Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let cur = Bot.getProperty("cur","⛔️ Not Set")
let min = Bot.getProperty("adminmindepo01","⛔️ Not Set")
let max = Bot.getProperty("adminmaxdepo01","⛔️ Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","⛔️ Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","⛔️ Not Set")

let User_Wallet_Deposit = Bot.getProperty("User_Wallet_Deposit"+user.telegramid);
if (!User_Wallet_Deposit){
Libs.CoinPayments.createPermanentWallet({
  currency: ""+cur+"",
  label: "myLabel",
  onSuccess: "/onWalletCreation",
  onIncome: "/onSecret_Complete_Deposit"
});
} else {
let line = "\n• ━━━━━━━━━━━━━━━━━ •\n"
Bot.sendMessage(""+line+"*➕ Welcome! Here You Can Start A New Investment!*\n\n_💵 We Offer Up To 2 Different Investment Plans, Choose The Best For You!_"+line+"*1️⃣ From "+min+" "+cur+" To "+max+" "+cur+"*\n_» "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day «_\n\n*2️⃣ From "+min+" "+cur+" To "+max+" "+cur+"*\n_» "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day «_"+line+"")
Bot.sendMessage(""+line+"_⚠️ If You Send Less Than "+min+" "+cur+", Your Deposit Will Be Ignored!_\n\n*✅ Send The Amount You Want To Invest To The Following Address:*"+line+"")
Bot.sendMessage(""+line+"`"+User_Wallet_Deposit+"`"+line+"")
}

