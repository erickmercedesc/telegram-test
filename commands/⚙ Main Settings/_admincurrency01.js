/*CMD
  command: /admincurrency01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: â Main Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let cur =Bot.getProperty("cur","âī¸ Not Set")
let id = User.getProperty("adminmsgid")
var b=[
[{text: "đĄ Change Currency", callback_data:"/changecur01"}],
[{text:"Return âŠī¸",callback_data:"/adminmainsettings01"},{text:"âŦī¸ Back To Sittings", callback_data:"/secretpanel r"}]]
let txt = "đ Current Bot Currency: *"+cur+"* \n\n- _Click On Change Currency For Change Bot Currency_"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
}else{
return}
