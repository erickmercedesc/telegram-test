/*CMD
  command: š°
  help: 
  need_reply: 
  auto_retry_time: 
  folder: šļø Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "ā On"){
Bot.sendMessage("*š  Maintenance In Progress!*\n\n_āŖļø Bot Administration Does Some Technical Work Within This Bot.\nāŖļø Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nāŖļø All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_ā š Secret Panel | ā Main Settings | š Maintenance Mode_\n\n*For The Users:*\n_ā¹ļø You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var cur = Bot.getProperty("cur","āļø Not Set")
HTTP.get({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols="+cur.toLowerCase()+"",
  success: "/Secret_Account"
})
