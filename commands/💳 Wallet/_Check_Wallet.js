/*CMD
  command: /Check_Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💳 Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("usermsgid")
var cur = Bot.getProperty("cur","⛔️ Not Set")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
if(message.length==34){
let b = [[{title: "✅ Confirm", command: "/wallet r" },{title: "❌ Cancel", command: "/Cancel_Wallet_Set" }]]
Bot.editMessage("*✅ Done:* _Your New Wallet Is:_\n`"+message+"`",msgid)
Bot.editInlineKeyboard(b,msgid)
Bot.setProperty("User_Wallet"+user.telegramid, message , "string")
}else{
let b = [[{title: "🔄 Try Again", command: "/Send_Wallet" }]]
Bot.editMessage("*🖊 Error:* _This Is Not A "+cur+" Address! Please Send A Correct Address_",msgid)
Bot.editInlineKeyboard(b,msgid)
}
