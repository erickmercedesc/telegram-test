/*CMD
  command: š„ Calculator
  help: 
  need_reply: false
  auto_retry_time: 
  folder: š„ Calculator

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: /calculator
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
Bot.sendKeyboard("ā¬ļø Return","š„* Profit Calculator *š„\n\n_āļø Calculate Here Your Incoming Profits!_\n\n*ā”ļø Send The Amount Of "+cur+" You Want To Invest!*")
Bot.runCommand("/Calculator_Result_USD")
