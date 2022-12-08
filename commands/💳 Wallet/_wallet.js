/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💳 Wallet
  answer: 
  keyboard: 
  aliases: 💳 wallet, 💾 wallet
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
let msgid = User.getProperty("usermsgid")
let User_Wallet = Bot.getProperty("User_Wallet"+user.telegramid,"⛔️ Not Set")
var cur = Bot.getProperty("cur","⛔️ Not Set")
var btn = [[{ title: "💼 Set / Change Wallet", command: "/Send_Wallet"}]]
if(params=="r"){
Bot.editMessage("*💡 Your Currently Set "+cur+" Wallet Is:*\n`"+User_Wallet+"`\n\n_💹 It Will Be Used For All Future Withdrawals._",msgid)
Bot.editInlineKeyboard(btn,msgid)
}else{
Bot.sendInlineKeyboard(btn,"*💡 Your Currently Set "+cur+" Wallet Is:*\n`"+User_Wallet+"`\n\n_💹 It Will Be Used For All Future Withdrawals._",{on_result:"/usermsgid"})
}
