/*CMD
  command: ✅ Confirm Restore Data Bot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: /adminconfirmrestoredatabot01
CMD*/

var ms = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.setProperty("mustjoin", undefined , "string")
Bot.setProperty("autopost", undefined , "string")
Bot.setProperty("bb_apikey01", undefined , "string")
Bot.setProperty("cp_privatekey01", undefined , "string")
Bot.setProperty("cp_publickey01", undefined , "string")
Bot.setProperty("cur", undefined , "string")
Bot.setProperty("adminmindepo01", undefined , "string")
Bot.setProperty("adminmaxdepo01", undefined , "string")
Bot.setProperty("adminminwd01", undefined , "string")
Bot.setProperty("adminmireind01", undefined , "string")
Bot.setProperty("RefCom", undefined , "string")
Bot.setProperty("PercentagePlan", undefined , "string")
var b = [[{text:"⬅️ Back To Sittings", callback_data:"/adminbotdetails01"}]]
let txt = "*🗑 The Bot's Data Has Been Successfully Deleted.*"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:ms,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
}else{
return}

