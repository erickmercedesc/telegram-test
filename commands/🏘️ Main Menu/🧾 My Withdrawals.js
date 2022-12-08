/*CMD
  command: 🧾 My Withdrawals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
var jk="🧾 *Withdrawals History*"
var h = Bot.getProperty("withdrawals_history"+user.telegramid)
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
jk+= "\n✨* No Withdrawal found*"
}else{
if(h.length>0){
jk+= "\n_Here you can find your last 10 pending or paid withdrawals_"
for(var i in j1){
let r=j1[i]
var name = r.name
var iad = r.wd_id
var amount = r.wd_amount
var time = r.wd_time
var wallet = r.wd_wallet
var cur2 = r.wd_currency
var bd = r.servertime
var status = Bot.getProperty("wdstatus"+user.telegramid+iad)
var txid = Bot.getProperty("wdtxid"+user.telegramid+iad)
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
Api.sendMessage({chat_id:chat.chatid,text:jk,parse_mode:"markdown",disable_web_page_preview:true})
