/*CMD
  command: š Reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š Reinvest
  answer: 
  keyboard: 
  aliases: /reinvest, ā»ļø reinvest
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let ReinvestMode = Bot.getProperty("ReinvestMode")
if(ReinvestMode == "ā Off"){
Bot.sendMessage("*āļø Reinvestments Disabled*")
return
}
let mode = Bot.getProperty("mode")
if(mode == "ā On"){
Bot.sendMessage("*š  Maintenance In Progress!*\n\n_āŖļø Bot Administration Does Some Technical Work Within This Bot.\nāŖļø Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nāŖļø All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_ā š Secret Panel | ā Main Settings | š Maintenance Mode_\n\n*For The Users:*\n_ā¹ļø You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let balance = Libs.ResourcesLib.userRes("balance")
var min = Bot.getProperty("adminmireind01","āļø Not Set")
var cur = Bot.getProperty("cur","āļø Not Set")
if(balance.value() < min){
Bot.sendMessage("*ā You Can Not Reinvest Right Now:* _You Need At Least "+min+" "+cur+" To Reinvest!_")
}else{
Bot.sendKeyboard("š Back","*š¤ How Many "+cur+" You Want To Re-invest š\n\nMinimum:* `"+min+" "+cur+"`\n*Maximum:* `"+balance.value().toFixed(8)+" "+cur+"`\n\n_Maximum Amount Corresponds To Your Balance_\n\n*ā”ļø Send Now The Amount Of You Want To Re-invest š*")
}
Bot.runCommand("/NewInv")
