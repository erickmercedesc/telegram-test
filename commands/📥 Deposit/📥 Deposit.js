/*CMD
  command: ๐ฅ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐ฅ Deposit
  answer: 
  keyboard: 
  aliases: /deposit, ๐ต deposit
CMD*/

let bannnk = Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let DepositMode = Bot.getProperty("DepositMode")
if(DepositMode == "โ Off"){
Bot.sendMessage("*โ๏ธ Deposits Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "โ On"){
Bot.sendMessage("*๐  Maintenance In Progress!*\n\n_โช๏ธ Bot Administration Does Some Technical Work Within This Bot.\nโช๏ธ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nโช๏ธ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_โ ๐ Secret Panel | โ Main Settings | ๐ Maintenance Mode_\n\n*For The Users:*\n_โน๏ธ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let cur = Bot.getProperty("cur","โ๏ธ Not Set")
let min = Bot.getProperty("adminmindepo01","โ๏ธ Not Set")
let max = Bot.getProperty("adminmaxdepo01","โ๏ธ Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","โ๏ธ Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","โ๏ธ Not Set")

let User_Wallet_Deposit = Bot.getProperty("User_Wallet_Deposit"+user.telegramid);
if (!User_Wallet_Deposit){
Libs.CoinPayments.createPermanentWallet({
  currency: ""+cur+"",
  label: "myLabel",
  onSuccess: "/onWalletCreation",
  onIncome: "/onSecret_Complete_Deposit"
});
} else {
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
Bot.sendMessage(""+line+"*โ Welcome! Here You Can Start A New Investment!*\n\n_๐ต We Offer Up To 2 Different Investment Plans, Choose The Best For You!_"+line+"*1๏ธโฃ From "+min+" "+cur+" To "+max+" "+cur+"*\n_ยป "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day ยซ_\n\n*2๏ธโฃ From "+min+" "+cur+" To "+max+" "+cur+"*\n_ยป "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day ยซ_"+line+"")
Bot.sendMessage(""+line+"_โ ๏ธ If You Send Less Than "+min+" "+cur+", Your Deposit Will Be Ignored!_\n\n*โ Send The Amount You Want To Invest To The Following Address:*"+line+"")
Bot.sendMessage(""+line+"`"+User_Wallet_Deposit+"`"+line+"")
}

