/*CMD
  command: /Secret_Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐๏ธ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk = Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "โ On"){
Bot.sendMessage("*๐  Maintenance In Progress!*\n\n_โช๏ธ Bot Administration Does Some Technical Work Within This Bot.\nโช๏ธ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nโช๏ธ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_โ ๐ Secret Panel | โ Main Settings | ๐ Maintenance Mode_\n\n*For The Users:*\n_โน๏ธ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let result = JSON.parse(content)
let usd = result[0].current_price
var cur = Bot.getProperty("cur","โ๏ธ Not Set")

let ST_Total_Users = Libs.ResourcesLib.anotherChatRes("ST_Total_Users", "global")
let ST_Total_Investments = Libs.ResourcesLib.anotherChatRes("ST_Total_Investments", "global")
let ST_Total_Reinvestments = Libs.ResourcesLib.anotherChatRes("ST_Total_Reinvestments", "global")
let ST_Total_Withdrawals = Libs.ResourcesLib.anotherChatRes("ST_Total_Withdrawals", "global");

let ST_Total_Investments_USD = ST_Total_Investments.value()*usd
let ST_Total_Reinvestments_USD = ST_Total_Reinvestments.value()*usd
let ST_Total_Withdrawals_USD = ST_Total_Withdrawals.value()*usd
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
Bot.sendMessage(""+line+"*ยป ๐ฅ Total Users:* `"+ST_Total_Users.value()+"`\n\n*ยป โ Total Investments: ยซ*\n`๐ฒ"+ST_Total_Investments.value().toFixed(8)+" "+cur+" ~ "+ST_Total_Investments_USD.toFixed(4)+" $`\n\n*ยป ๐ Total Reinvested: ยซ*\n๐ฒ `"+ST_Total_Reinvestments.value().toFixed(8)+" "+cur+" ~ "+ST_Total_Reinvestments_USD.toFixed(4)+" $`\n\n*ยป ๐ค Total Withdrawals: ยซ*\n๐ฒ `"+ST_Total_Withdrawals.value().toFixed(8)+" "+cur+" ~ "+ST_Total_Withdrawals_USD.toFixed(4)+" $`"+line+"")
