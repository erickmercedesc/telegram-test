/*CMD
  command: /adminreinvest01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š§ Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var cur = Bot.getProperty("ReinvestMode","ā On")
var b1=[
[{text:"š Minimum Reinvest",callback_data:"/adminminrein01"},{text:"š Maximum Reinvest",callback_data:"/adminmaxrein01"}],[{text: "ā On", callback_data: "/ReinvestOnOff_2 ā On"},{text: "ā Off", callback_data: "/ReinvestOnOff_2 ā Off"}],[{text:"ā¬ļø Back To Sittings", callback_data:"/adminbotsettings01"}]]
var b2=[
[{title:"š Minimum Reinvest",command:"/adminminrein01"},{title:"š Maximum Reinvest",command:"/adminmaxrein01"}],[{title: "ā On", command: "/ReinvestOnOff_2 ā On"},{title: "ā Off", command: "/ReinvestOnOff_2 ā Off"}],[{title:"ā¬ļø Back To Sittings", command:"/adminbotsettings01"}]]
if(params=="r"){
Bot.editMessage("*šāšØ Edit Reinvest Options In General.\n\nāļø Current Mode:* _"+cur+"_",id)
Bot.editInlineKeyboard(b2,id)
}else{
var text = "<b>šāšØ Edit Reinvest Options In General.\n\nāļø Current Mode:</b> <i>"+cur+"</i>"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:id,parse_mode:"html",reply_markup: {inline_keyboard:b1 } })
}
}else{
return}
