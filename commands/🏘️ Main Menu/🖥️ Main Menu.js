/*CMD
  command: š„ļø Main Menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: šļø Main Menu
  answer: 
  keyboard: 
  aliases: /secret_main_menu, ā¬ļø back, ā¬ļø return
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
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
let res = Libs.ResourcesLib.userRes("balance");
let Menu_Builder = Bot.getProperty("Menu_Builder")
let text = `*š Main Menu*`
if(!Menu_Builder){
Bot.sendKeyboard("š° Balance ~ "+res.value().toFixed(8)+" "+cur+",\nš„ Deposit,š Reinvest,š¤ Withdraw,\nš³ Wallet,š„ Calculator,š„ Refferral,\nāļø Details,š” Rules\nš Statistics,š cpb",text)
}else{
var Lang = {
'balance':res.value().toFixed(8),
'cur':cur
}
let Keyboard = Menu_Builder.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
Bot.sendKeyboard(Keyboard ,text)
}
