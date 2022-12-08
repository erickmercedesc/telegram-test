/*CMD
  command: /adminmenubuilder01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🎛 Menu Builder

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 🎛 menu builder
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let ms = User.getProperty("adminmsgid")
Api.deleteMessage({chat_id: user.telegramid,message_id:ms})
let inlkey = [[{ text: "Next ➡️", callback_data: "/adminmenubuilder02" }],[{ text: "✅ Apply This Menu", callback_data: "/adminapplythismenu01 Menu_#1" }]]
let text = "<b>Menu Builder #1</b>"
if (params == "r") {
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://telegra.ph/file/c7b877cb44d9fca888ac3.jpg",
      caption: text,
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: inlkey }
  })
  return
}
Api.sendPhoto({
  photo: "https://telegra.ph/file/c7b877cb44d9fca888ac3.jpg",
  caption: text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
})
}else{
return}
