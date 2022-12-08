/*CMD
  command: /adminmenubuilder02
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
let inlkey = [[{ text: "⬅️ Previous", callback_data: "/adminmenubuilder01 r" },{ text: "Next ➡️", callback_data: "/adminmenubuilder03" }],
[{ text: "✅ Apply This Menu", callback_data: "/adminapplythismenu01 Menu_#2" }]]
let text = "<b>Menu Builder #2</b>"
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://telegra.ph/file/45f903dc08fdeaa442194.jpg",
      caption: text,
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: inlkey }
  })
}else{
return}
