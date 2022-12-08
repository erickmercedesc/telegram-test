/*CMD
  command: /adminapplythismenu01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🎛 Menu Builder
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let inlkey = [[{ text: "🔚 Close Menu Builder", callback_data: "/adminclosemenubuilder01" }]]
let text = "<b>✅ The New Interaction Menu For Bot Users Has Been Configured Successfully!</b>"
Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "video",
      media: "https://telegra.ph/file/a1e5e52fb60175f016506.mp4",
      caption: text,
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: inlkey }
  })
if (params.includes("#1")) {
Bot.setProperty("Menu_Builder", "💰 Balance ~ {balance} {cur},\n📥 Deposit,🔃 Reinvest,📤 Withdraw,\n💳 Wallet,🖥 Calculator,👥 Refferral,\n⚜️ Details,📡 Rules\n📊 Statistics,🔐 cpb" ,"string")
return
}
if (params.includes("#2")) {
Bot.setProperty("Menu_Builder", "⚖️ {balance} {cur},\n➕ Deposit,♻️ Reinvest,➖ Withdraw,\n🔐 Set Wallet,🖥 Calculator,👥 Refferral,\n📊 Statistics,💹 FDB" ,"string")
return
}
if (params.includes("#3")) {
Bot.setProperty("Menu_Builder", "🏦 Balance ~ {balance} {cur},\n💵 Deposit,💱 Multicurrency,\n💸 Withdraw,♻️ Reinvest,💾 Wallet,\n🖥 Calculator,🏄 Refferral,📞 Support,\n📊 Status,⁉️ About" ,"string")
return
}
}else{
return}
