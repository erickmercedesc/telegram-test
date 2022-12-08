/*CMD
  command: 🖥️ Main Menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: /secret_main_menu, ⬅️ back, ⬅️ return
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
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var cur = Bot.getProperty("cur","⛔️ Not Set")
let res = Libs.ResourcesLib.userRes("balance");
let Menu_Builder = Bot.getProperty("Menu_Builder")
let text = `*🔝 Main Menu*`
if(!Menu_Builder){
Bot.sendKeyboard("💰 Balance ~ "+res.value().toFixed(8)+" "+cur+",\n📥 Deposit,🔃 Reinvest,📤 Withdraw,\n💳 Wallet,🖥 Calculator,👥 Refferral,\n⚜️ Details,📡 Rules\n📊 Statistics,🔐 cpb",text)
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
