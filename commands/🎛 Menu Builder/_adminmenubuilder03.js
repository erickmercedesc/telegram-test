/*CMD
  command: /adminmenubuilder03
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
let inlkey = [[{ text: "⬅️ Previous", callback_data: "/adminmenubuilder02" },{ text: "Next ➡️", callback_data: "/adminmenubuilder04" }],
[{ text: "✅ Apply This Menu", callback_data: "/adminapplythismenu01 Menu_#3" }]]
let text = "<b>Menu Builder #3</b>"
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://telegra.ph/file/c7bbc68dc9a0d1c9b03d8.jpg",
      caption: text,
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: inlkey }
  })
}else{
return}
