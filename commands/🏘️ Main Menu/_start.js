/*CMD
  command: /start
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
let Admin_Login = Bot.getProperty("adminlogin")
if (!Admin_Login){
Bot.sendMessage("_👋🏻 Welcome To @"+bot.name+", We Need You To Become The Bot Administrator To Be Able To Configure It With Your Data And Start Working._\n\n*➡️ Please Enter Your Id To Add You As Administrator.*");
Bot.runCommand("/addAdmin")
return
}
let mustjoin = Bot.getProperty("mustjoin")
if (!mustjoin){
Bot.sendMessage("*⛔️ CHANNEL MUST JOIN* \n_not configured. Configure it in adminpanel /secretpanel_");
return
}
let autopost = Bot.getProperty("autopost")
if (!autopost){
Bot.sendMessage("*⛔️ CHANNEL AUTO POST* \n_not configured. Configure it in adminpanel /secretpanel_");
return
}
let bb_apikey8 = Bot.getProperty("bb_apikey01")
let cp_privatekey8=Bot.getProperty("cp_privatekey01")
let cp_publickey8=Bot.getProperty("cp_publickey01")
if((!cp_privatekey8)||(!cp_publickey8)||(!bb_apikey8)){
Bot.sendMessage("⛔️ *COINPAYMENTS KEYS* \n_not configured. Configure it in the admin panel /secretpanel_")
return
}
let currency = Bot.getProperty("cur")
if (!currency){
Bot.sendMessage("*⛔️ CURRENT CURRENCY* \n_not configured. Configure it in adminpanel /secretpanel_");
return
}
let mindepo = Bot.getProperty("adminmindepo01")
if (!mindepo){
Bot.sendMessage("*⛔️ MINIMUM DEPOSIT* \n_not configured. Configure it in the admin panel /secretpanel_");
return
}
let minwd = Bot.getProperty("adminminwd01")
if (!minwd){
Bot.sendMessage("*⛔️ MINIMUM WITHDRAWAL* \n_not configured. Configure it in adminpanel /secretpanel_");
return
}
let minrein = Bot.getProperty("adminmireind01")
if (!minrein){
Bot.sendMessage("*⛔️ MINIMUM REINVESTMENT* \n_not configured. Configure it in adminpanel /secretpanel_");
return
}
if(params){
let spl=params.split('_')
let tag_param=spl[0]
let info_id=spl[1]
let tyui6=spl[2]
var amount87=spl[3]
if(tag_param=="userinfo"){
Bot.runCommand("/infid"+" "+info_id)
return
}
}
let admin = Bot.getProperty("adminlogin")
Api.getChatMember({
  chat_id: mustjoin,
  user_id: user.telegramid,
  on_result: "/onCheckJoin"
})

var user_link = "["+user.first_name+"](tg://user?id="+user.telegramid+")"
var used = User.getProperty("used5")
if (!used) {
Bot.sendMessageToChatWithId(admin, "S.From --> "+user_link+"\n🆔 --> `"+user.telegramid +"`")
let total_count = Libs.ResourcesLib.anotherUserRes("user_position");
total_count.add(1)
let kobasam=total_count.value()
Bot.setProperty("user_position"+user.telegramid,kobasam,"string")
let NowCreated = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"})
Bot.setProperty("chat_created"+user.telegramid,NowCreated,"string")
let Server_Online_Time = new Date()
Bot.setProperty("Server_Online_Time",Server_Online_Time,"string")

Bot.setProperty("gnoti"+user.telegramid,"yes","string")
Bot.setProperty("cnoti"+user.telegramid,"yes","string")
Bot.setProperty("anoti"+user.telegramid,"yes","string")
Bot.setProperty("enoti"+user.telegramid,"yes","string")


if(params&&params!=user.telegramid){
let u=params
User.setProperty("Reffer",u,"string")
let inl=Bot.getProperty("gnoti"+u)
if(inl=="yes"){
Api.sendMessage({chat_id:u,text:"➕<b> New Refferral:</b> <i>"+user.first_name+" On Level 1</i>",parse_mode:"html"})
}
let res = (Libs.ResourcesLib.userRes("Ref_1"),u)
Bot.setProperty("rid"+user.telegramid,u,"string")
let refUserBonus = Libs.ResourcesLib.anotherUserRes("Ref_1", u);
  refUserBonus.add(1);
let d =User.getProperty("Reffer")
let ge =Bot.getProperty("rid"+d)
let rf1=Bot.getProperty("rid"+u)
if(rf1){
Bot.setProperty("rid2"+rf1,user.telegramid,"string")
var in2=Bot.getProperty("gnoti"+rf1)
if(in2=="yes"){
Api.sendMessage({chat_id:rf1,text:"➕ <b>New Refferral:</b> <i>"+user.first_name+" On Level 2</i>",parse_mode:"html"})}
let refUserBonus2 = Libs.ResourcesLib.anotherUserRes("Ref_2", rf1);
  refUserBonus2.add(1);
}
let rf3=Bot.getProperty("rid"+rf1)
if(rf3){
Bot.setProperty("rid3"+rf3,user.telegramid,"string")
var in3=Bot.getProperty("gnoti"+rf3)
if(in3=="yes"){
Api.sendMessage({chat_id:rf3,text:"➕ <b>New Refferral :</b> <i>"+user.first_name+" On Level 3</i>",parse_mode:"html"})}
let refUserBonus3 = Libs.ResourcesLib.anotherUserRes("Ref_3", rf3);
  refUserBonus3.add(1);
}}


User.setProperty('used5',true,'boolean');
}
let created = Bot.getProperty("chat_created"+user.telegramid)
let user_position = Bot.getProperty("user_position"+user.telegramid)
var hokomat={
first_name:user.first_name,
last_name:user.last_name,
username:user.username,
is_bot:false,
chat_created:created,
mention_id:" ["+user.telegramid+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_name:"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_username:"["+user.username+"]("+"tg://user?id="+user.telegramid+")",
position:user_position,
id:user.telegramid
}
Bot.setProperty("user_info"+user.telegramid,hokomat,'JSON')
