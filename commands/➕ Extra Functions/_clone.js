/*CMD
  command: /clone
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ➕ Extra Functions
  answer: 
  keyboard: 
  aliases: /transfer, /sendbot, /clonebot
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let ms = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Bot.sendMessage("*🤩 It is a relief to see that you are an administrator, you have the authority to use me, but those who are not administrators of this bot, we will have to ban them from the bot for using me incorrectly.*")
}else{
var id = user.telegramid
var usrname = '<a href="tg://user?id='+user.telegramid+'">'+user.first_name+"</a>"
Bot.setProperty("banuser"+id,"banned")
var btn = [[{text:"✅ UnBan",callback_data:"/hacker_unban "+id+""}]]
var text = ""+usrname+" He Was Banned For Trying To Clone Me.\n🆔 --> <code>"+user.telegramid+"</code>"
Api.sendMessage({chat_id:admin, message_id: ms, text: text, parse_mode:"HTML",reply_markup:{inline_keyboard:btn}})
return}
