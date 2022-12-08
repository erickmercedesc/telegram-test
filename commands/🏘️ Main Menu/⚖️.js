/*CMD
  command: ⚖️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
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
HTTP.get({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols="+cur.toLowerCase()+"",
  success: "/Secret_Account"
})
