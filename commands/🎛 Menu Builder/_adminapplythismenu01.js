/*CMD
  command: /adminapplythismenu01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š Menu Builder
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let inlkey = [[{ text: "š Close Menu Builder", callback_data: "/adminclosemenubuilder01" }]]
let text = "<b>ā The New Interaction Menu For Bot Users Has Been Configured Successfully!</b>"
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
Bot.setProperty("Menu_Builder", "š° Balance ~ {balance} {cur},\nš„ Deposit,š Reinvest,š¤ Withdraw,\nš³ Wallet,š„ Calculator,š„ Refferral,\nāļø Details,š” Rules\nš Statistics,š cpb" ,"string")
return
}
if (params.includes("#2")) {
Bot.setProperty("Menu_Builder", "āļø {balance} {cur},\nā Deposit,ā»ļø Reinvest,ā Withdraw,\nš Set Wallet,š„ Calculator,š„ Refferral,\nš Statistics,š¹ FDB" ,"string")
return
}
if (params.includes("#3")) {
Bot.setProperty("Menu_Builder", "š¦ Balance ~ {balance} {cur},\nšµ Deposit,š± Multicurrency,\nšø Withdraw,ā»ļø Reinvest,š¾ Wallet,\nš„ Calculator,š Refferral,š Support,\nš Status,āļø About" ,"string")
return
}
}else{
return}
