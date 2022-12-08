/*CMD
  command: /getwdap0101
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
let User_ID = message
if(chat.chatid==admin){
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
let x = Bot.getProperty("user_info"+User_ID)
if(!x){
var btn = [[{text: "⬅️ Back To Sittings", callback_data: "/getwdht01admin"}]]
Api.editMessageText({chat_id:chat.chatid,text:"<b>❕INVAILD ID. USER DID NOT FOUNDED IN THIS BOT DATABASE.</b>",message_id:id,disable_web_page_preview:true,parse_mode:"html",reply_markup:{inline_keyboard:btn}})
return
}
var h = Bot.getProperty("withdrawals_history"+User_ID)
var jk=""
if(h){
if(h.length>10){
let ri=(h.length*1)
let to=ri-10
var j1=h.slice(to,h.length)
}else{
var j1=h
}}else{
var j1=false
}
if(!h){
jk+= "\n*🔒 This User did not made any withdrawal Yet.*"
}else{
if(h.length>0){
for(var i in j1){
let r=j1[i]
var name = r.name
var iad = r.wd_id
var amount = r.wd_amount
var time = r.wd_time
var wallet = r.wd_wallet
var cur2 = r.wd_currency
var bd = r.servertime
var status = Bot.getProperty("wdstatus"+User_ID+iad)
var txid = Bot.getProperty("wdtxid"+User_ID+iad)
if(!bd){
var time2 = Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")+"M"
}else{
var time2 = bd
}
if(!txid){
jk+= "\n\n*💰 Amount:*` "+amount+" "+cur2+" `\n*🗓 Time:*` "+time2+" `"+"\n💳 *Wallet:* `"+wallet+" `"
if(status){
jk+= " \n"+"📊 *Status:* `"+status+"`"
}
}else{
jk+= "\n\n*💰 Amount:*` "+amount+" "+cur2+"` "+" \n*🗓 Time:* `"+time2+"`"+"\n💳 *Wallet:* `"+wallet+"`"
if(status){
jk+= " \n"+"📊 *Status:* `"+status+"`"
}
jk+= "\n*🔗 Transaction Hash:*\n["+txid+"]"+"("+'https://tx.botdev.me/'+cur2+"/"+txid+")"
}
}}
}
var b=[[{text:"⬅️ Back To Sittings",callback_data:"/getwdht01admin"}]]
Api.editMessageText({chat_id:chat.chatid,text:jk,message_id:id,disable_web_page_preview:true,parse_mode:"markdown",reply_markup:{inline_keyboard:b}})
}else{
return}
