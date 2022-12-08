/*CMD
  command: 🗃 My Investments
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
var daily_expired = Bot.getProperty("daily_expired")
let user_ach = Bot.getProperty("user_active_investments_history"+user.telegramid)
var inv = "<b>⚙️ Last 10 Active Investments</b>"
var cur = Bot.getProperty("cur")
function getTime( date1, date2 ) {
  var one_day=1000*60*60*24;
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  var difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  var difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  var difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);  
  return days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes, And ' + seconds + ' Seconds';
}

var eh = Bot.getProperty("expiredinvestment"+user.telegramid)
if(!user_ach){
inv+="\n✨<b> No Investments Found</b>"
}else{
if(user_ach.length>0){
if(user_ach.length>10){
let ri=(user_ach.length*1)
let to=ri-10
var j1=user_ach.slice(to,user_ach.length)
}else{
var j1=user_ach
}
for (var i in j1){
var inf=j1[i]
let amount=inf.amount
let curren=inf.cur
let usd=inf.usd
let time=inf.time
let planhr=inf.planhr
let txid=inf.txn_id
var bd=inf.servertime
let html='<a href="'+'https://tx.botdev.me/'+curren+'/'+txid+'">'+txid+'</a>'
let gett= Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")
if(!bd){
var time2=gett+"M"
}else{
var time2=bd
}
inv+="\n\n🗓 <b>Date:</b> <code>"+time2+"</code>\n💰 <b>Amount:</b> <code>"+amount+" "+curren+" ~ "+usd+"$</code>\n<b>📈 Status:</b> <code>#"+((i*1)+1)+"</code> <code>✅ Active</code>"
inv+="\n<b>🔗 Transaction Hash:</b>\n"+html+""
let phr =1000*60*60*planhr
let ending=new Date((new Date(time)).getTime() + (daily_expired* phr))
let cr_date=new Date(time)
let remtime=getTime(new Date(),ending)
inv+="\n<b>🧭 Remaining Time:</b>  <code>"+remtime+"</code>"
}
}else{
inv+=" \n<b>✨ No Investments Found</b>"
}
}
Api.sendMessage({chat_id:chat.chatid,text:inv,disable_web_page_preview:true,parse_mode:"html"})
var jps="✅ <b>Last 15 Expired Investments</b>"
var expired_his = Bot.getProperty("user_expired_investments"+user.telegramid, [ ])
if(expired_his.length>0){
for(var g in expired_his){
var ex=expired_his[g]
let time2=ex.servertime
let amount2=ex.investment
jps+="\n\n🗓 <b>Expired At:</b> <code>"+time2+"</code>\n<b>📡 Expired Investment:</b> <code>#"+((g*1)+1)+"</code>\n<b>💰 Amount Expired:</b> <code>"+amount2+" "+cur+"</code>"
}
}else{
jps+=" \n<b>✨ No Investments Found</b>"
}
Api.sendMessage({chat_id:chat.chatid,text:jps,parse_mode:"html"})
