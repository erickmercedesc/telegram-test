/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š³ Wallet
  answer: 
  keyboard: 
  aliases: š³ wallet, š¾ wallet
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
let msgid = User.getProperty("usermsgid")
let User_Wallet = Bot.getProperty("User_Wallet"+user.telegramid,"āļø Not Set")
var cur = Bot.getProperty("cur","āļø Not Set")
var btn = [[{ title: "š¼ Set / Change Wallet", command: "/Send_Wallet"}]]
if(params=="r"){
Bot.editMessage("*š” Your Currently Set "+cur+" Wallet Is:*\n`"+User_Wallet+"`\n\n_š¹ It Will Be Used For All Future Withdrawals._",msgid)
Bot.editInlineKeyboard(btn,msgid)
}else{
Bot.sendInlineKeyboard(btn,"*š” Your Currently Set "+cur+" Wallet Is:*\n`"+User_Wallet+"`\n\n_š¹ It Will Be Used For All Future Withdrawals._",{on_result:"/usermsgid"})
}
