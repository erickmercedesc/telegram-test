/*CMD
  command: /htgetaradmin0101
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
let User_ID = message
let geta = Bot.getProperty("investment"+User_ID)
if(!geta){
User.setProperty("getaih","❌ This User Did Not Made Any Investment Yet","string")
}else{
User.setProperty("getaih",geta,"string")}
let now = User.getProperty("getaih")
if(chat.chatid==admin){
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
let x = Bot.getProperty("user_info"+User_ID)
if(!x){
var btn = [[{text: "⬅️ Back To Sittings", callback_data: "/administht01"}]]
Api.editMessageText({chat_id:chat.chatid,text:"<b>❕INVAILD ID. USER DID NOT FOUNDED IN THIS BOT DATABASE.</b>",message_id:id,disable_web_page_preview:true,parse_mode:"html",reply_markup:{inline_keyboard:btn}})
return
}
var inv="<b>👤 User:</b> "+'<a href="'+'tg://user?id='+message+'">'+x.first_name+'</a>'
let user_ach = Bot.getProperty("user_active_investments_history"+User_ID)
var b=[
[{title:"💸 My withdrawals",command:"/ht2"}]]
var eh = Bot.getProperty("expiredinvestment"+user.telegramid)
if(!user_ach){
inv+="\n\n<b>⛔ No Active Investments Found.</b>"
}else{
if(user_ach.length>0){
if(user_ach.length>14){
let ri=(user_ach.length*1)
let to=ri-14
var j1=user_ach.slice(to,user_ach.length)
}else{
var j1=user_ach
}
for (var i in j1){
var inf=j1[i]
let amount=inf.amount
let usd=inf.usd
let time=inf.time
let txid=inf.txn_id
let curren=inf.cur
let html='<a href="'+'https://tx.botdev.me/'+curren+'/'+txid+'">'+txid+'</a>'
let gett = Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")
let time2=gett+"M"

inv+="\n\n⏱<b>Date:</b> <code>"+time2+"</code>"+" \n💰<b>Amount:</b> <code>"+amount+" "+curren+" ~ "+usd+"</code>\n<b>📈 Status:</b> #"+((i*1)+1)+" <code>✅ Active</code>\n<b>🔗 Transaction Hash:</b>\n"+html
}
}else{
inv+=" \n<b>⚠️ No Active Investment Found.</b>"
}
}
var b=[
[{text:"⬅️ Back To Sittings",callback_data:"/administht01"}]]

Api.editMessageText({chat_id:chat.chatid,text:inv,message_id:id,disable_web_page_preview:true,parse_mode:"html",reply_markup:{inline_keyboard:b}})
if(!eh){
var msge="*✅ Last 20 Expired Investments*\n_✨ No Investments Found_"
}else{
var topm="*✅ Last 20 Expired Investments*\n\n"
msge=topm+eh
}
}else{
return}
