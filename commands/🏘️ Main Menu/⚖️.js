/*CMD
  command: âī¸
  help: 
  need_reply: 
  auto_retry_time: 
  folder: đī¸ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "â On"){
Bot.sendMessage("*đ  Maintenance In Progress!*\n\n_âĒī¸ Bot Administration Does Some Technical Work Within This Bot.\nâĒī¸ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nâĒī¸ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_â đ Secret Panel | â Main Settings | đ Maintenance Mode_\n\n*For The Users:*\n_âšī¸ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var cur = Bot.getProperty("cur","âī¸ Not Set")
HTTP.get({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols="+cur.toLowerCase()+"",
  success: "/Secret_Account"
})
