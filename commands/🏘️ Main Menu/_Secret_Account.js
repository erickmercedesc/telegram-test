/*CMD
  command: /Secret_Account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ποΈ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "β On"){
Bot.sendMessage("*π  Maintenance In Progress!*\n\n_βͺοΈ Bot Administration Does Some Technical Work Within This Bot.\nβͺοΈ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nβͺοΈ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_β π Secret Panel | β Main Settings | π Maintenance Mode_\n\n*For The Users:*\n_βΉοΈ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var result = JSON.parse(content)
var usd = result[0].current_price
var cur = Bot.getProperty("cur","βοΈ Not Set")
let balance = Libs.ResourcesLib.userRes("balance");
let deposit = Libs.ResourcesLib.userRes("deposit");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
let profit = Libs.ResourcesLib.userRes("profit");
let bonus = Libs.ResourcesLib.userRes("bonus");
let withdraw = Libs.ResourcesLib.userRes("withdraw");

let Balance_USD = balance.value()*usd
let Deposit_USD = deposit.value()*usd
let Reinvest_USD = reinvest.value()*usd
let Profit_USD = profit.value()*usd
let Bonus_USD = bonus.value()*usd
let Withdraw_USD = withdraw.value()*usd

let inf = "["+user.first_name+"](tg://user?id="+user.telegramid+")";

Bot.sendKeyboard("π My Investments,π§Ύ My Withdrawals,\nπ Wallet,π₯ Calculator\nβ¬οΈ Return","*π€ Account Summary:*  "+inf+
"\n\n*β Withdrawable Balance:*\n`"+balance.value().toFixed(8)+" "+cur+" ~ "+Balance_USD.toFixed(4)+" $`\n\n*π³ Active Investments:*\n`"+deposit.value().toFixed(8)+" "+cur+" ~ "+Deposit_USD.toFixed(4)+" $`\n\n*β»οΈ Total Reinvest:*\n`"+reinvest.value().toFixed(8)+" "+cur+" ~ "+Reinvest_USD.toFixed(4)+" $`\n\n*π°Total Profit:*\n`"+profit.value().toFixed(8)+" "+cur+" ~ "+Profit_USD.toFixed(4)+" $`\n\n*π Total Affiliate Bonus:*\n`"+bonus.value().toFixed(8)+" "+cur+" ~ "+Bonus_USD.toFixed(4)+" $`\n\n*πΈ Total Withdrawn:*\n`"+withdraw.value().toFixed(8)+" "+cur+" ~ "+Withdraw_USD.toFixed(4)+" $`");
