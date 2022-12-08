/*CMD
  command: /onSecret_Complete_Multi_Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!content){
return
}
let Options = User.getProperty("Secret_Multi_Deposit")
let cur = Bot.getProperty("cur")
let result = JSON.parse(content)
let Price = result.ticker.price
let Crypto_Price_1 = Price*params
let Crypto_Price = Crypto_Price_1.toFixed(8)
let Wallet_Address = Options.address
let Deposit_ID = Options.deposit_id
let Currency = Options.currency
let Amount = Options.amount
let Fee = Options.fee
let Fiat_Coin = Options.fiat_coin
let Fiat_Amount = Options.fiat_amount
let Txn_ID = Options.txn_id
let USD_Price = Fiat_Amount.toFixed(4)
let URL_Txn_ID = '<a href="https://tx.botdev.me/'+Currency+'/'+Txn_ID+'">'+Txn_ID+' </a>'
let Server_Time = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"})
let Confirms = Options.confirms
let Ipn_ID = Options.ipn_id
let Mention_Name = '<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'

let channel = Bot.getProperty("autopost")
var Percentage_Plan = Bot.getProperty("PercentagePlan")
let Daily_Expired = Bot.getProperty("daily_expired")
let Daily_Expired_Time = Bot.getProperty("daily_expired_Time")
let Plan_Hr = Bot.getProperty("daily_hour1")
var Profit_Value = Bot.getProperty("InvestmentPlan")
var min = Bot.getProperty("adminmindepo01")
var max = Bot.getProperty("adminmaxdepo01")
let Expected_Returns_1 = Profit_Value*Crypto_Price
let Expected_Returns = Expected_Returns_1.toFixed(8)
let line1 = "\n• ━━━━━━━━━━━━━━━━━━━━━━ •\n"
let line2 = "\n• ━━━━━━━━━━━━━━━━━ •\n"
if (Crypto_Price_1>= min && Crypto_Price_1 <= max){
Api.sendMessage({ text: ""+line1+"<b>» ✅ INVESTMENT STARTED AT NOW «</b>"+line1+"<b>💹 Plan Type:</b> <i>"+Percentage_Plan+".00% Every "+Plan_Hr+" Hours For "+Daily_Expired+" Days.\n\n💳 Profit Will Credited Into Your Withdrawable Balance With "+Percentage_Plan+".00% On Every "+Plan_Hr+" Hours.</i>"+line2+"<b>» 💵 Invested Amount: «</b>\n<code>"+Crypto_Price+" "+cur+" ~ "+USD_Price+" "+Fiat_Coin+"</code>\n\n<b>»💱 Invested Currency: «</b>\n<code>"+Amount.toFixed(8)+" "+Currency+" ~ "+USD_Price+" "+Fiat_Coin+"</code>\n\n<b>» 🧮 Expected Returns: «</b>\n<code>"+Expected_Returns+" "+cur+" ~ "+Profit_Value*USD_Price+" "+Fiat_Coin+"</code>"+line2+"", parse_mode : "HTML" , disable_web_page_preview: true });

Api.sendMessage({chat_id: channel, text: ""+line2+"<b>» ➕ New Deposit Received «</b>"+line2+"<b>» 👤 By User:</b> <code>"+user.first_name+"</code>\n\n<b>» 💰 Deposit Amount: «</b>\n<code>"+Crypto_Price+" "+cur+" ~ "+USD_Price+" "+Fiat_Coin+"</code>\n\n<b>» 💱 Deposit Currency: «</b>\n<code>"+Amount.toFixed(8)+" "+Currency+" ~ "+USD_Price+" "+Fiat_Coin+"</code>"+line2+"<b>» 🔗 Transaction Hash: «</b>\n"+URL_Txn_ID+""+line2+"", parse_mode : "HTML" , disable_web_page_preview: true });

let deposit = Libs.ResourcesLib.userRes("deposit");
deposit.add(Crypto_Price_1)
let ST_Total_Investments = Libs.ResourcesLib.anotherChatRes("ST_Total_Investments","global")
ST_Total_Investments.add(Crypto_Price_1)
let relg = Libs.ResourcesLib.userRes("accurralcount");
relg.add(1)
let relg12 = Libs.ResourcesLib.userRes("accurralcount");

Bot.run({
command : "/Secret_Multi_Adc",
run_after : 1*Daily_Expired_Time,
options: { amount: Crypto_Price, depid: relg12.value(), cur: cur }
});

let R = Bot.getProperty("rid"+user.telegramid)
if(R){
let f = R*1
let res = Libs.ResourcesLib.anotherUserRes("refinv", f);
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", f);
let bal = Libs.ResourcesLib.anotherUserRes("balance", f);

let Ref_Bonus_Lv1 = Bot.getProperty("RefCom%01")
let Bonus_Lv1 = Crypto_Price_1*Ref_Bonus_Lv1
res.add(Crypto_Price_1)
bonus.add(Bonus_Lv1)
bal.add(Bonus_Lv1)

let info01 = Bot.getProperty("cnoti"+f)
if(info01=="yes"){
Bot.sendMessageToChatWithId(f,"*➕ Refferral Deposit:* _+"+Bonus_Lv1.toFixed(8)+" "+cur+"_")
}
var hyperref1 = "👤 ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*➕ Commission:* _+"+Bonus_Lv1.toFixed(8)+" "+cur+"_"
let gyp1 = Bot.getProperty("activereflistinv"+f)
if(!gyp1){
Bot.setProperty("activereflistinv"+f,hyperref1,"string") 
}else{ 
Bot.setProperty("activereflistinv"+f,gyp1+"\n\n"+hyperref1,"string") 
}
}
let rf22 = Bot.getProperty("rid"+R)
if(rf22){
let Ref_Bonus_Lv2 = Bot.getProperty("RefCom%02")
let Bonus_Lv2 = Crypto_Price_1*Ref_Bonus_Lv2
let res2 = Libs.ResourcesLib.anotherUserRes("refinv", rf22);
res2.add(Crypto_Price_1)
let bal2 = Libs.ResourcesLib.anotherUserRes("balance", rf22);
bal2.add(Bonus_Lv2)
let bonus2 = Libs.ResourcesLib.anotherUserRes("bonus", rf22);
bonus2.add(Bonus_Lv2)

let info02 = Bot.getProperty("cnoti"+rf22)
if(info02=="yes"){
Bot.sendMessageToChatWithId(rf22,"*➕ Refferral Deposit:* _+"+Bonus_Lv2.toFixed(8)+" "+cur+"_")
}
var hyperref2 = "👤 ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*➕ Commission:* _+"+Bonus_Lv2.toFixed(8)+" "+cur+"_"
let gyp2 = Bot.getProperty("activereflistinv"+rf22)
if(!gyp2){
Bot.setProperty("activereflistinv"+rf22,hyperref2,"string") 
}else{
Bot.setProperty("activereflistinv"+rf22,gyp2+"\n\n"+hyperref2,"string")
}
}
let rf33=Bot.getProperty("rid"+rf22)
if(rf33){
let Ref_Bonus_Lv3 = Bot.getProperty("RefCom%03")
let Bonus_Lv3 = Crypto_Price_1*Ref_Bonus_Lv3
let res3 = Libs.ResourcesLib.anotherUserRes("refinv", rf33);
res3.add(Crypto_Price_1)
let bal3 = Libs.ResourcesLib.anotherUserRes("balance", rf33);
bal3.add(Bonus_Lv3)
let bonus3 = Libs.ResourcesLib.anotherUserRes("bonus", rf33);
bonus3.add(Bonus_Lv3)

let gg3 = Bot.getProperty("cnoti"+rf33)
if(gg3=="yes"){
Bot.sendMessageToChatWithId(rf33,"*➕ Refferral Deposit:* _+"+Bonus_Lv3.toFixed(8)+" "+cur+"_")
}
var hyperref3 = "👤 ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*➕ Commission:* _+"+Bonus_Lv3.toFixed(8)+" "+cur+"_"
let gyp3 = Bot.getProperty("activereflistinv"+rf33)
if(!gyp3){
Bot.setProperty("activereflistinv"+rf33,hyperref3,"string") 
}else{
Bot.setProperty("activereflistinv"+rf33,gyp3+"\n\n"+hyperref3,"string")
}
}

let admin = Bot.getProperty("adminlogin1139024599")
if(admin){
var New_Investment_Notification = "<b>➕ New Investment Notification</b>"+'\n'+'<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+' | '+'<code>'+user.telegramid+'</code> | '+' Just Invested <code>+'+Crypto_Price+' '+cur+'</code>'
Api.sendMessage({chat_id: admin, text: New_Investment_Notification, parse_mode: "HTML", disable_web_page_preview: true })
}

var mok56 = {
'amount':Crypto_Price,
'first_name':user.first_name,
'username':user.username,
'telegramid':user.telegramid,
'id':relg12.value(),
'planhr':Plan_Hr,
'url_txn_id':URL_Txn_ID,
'txn_id':Txn_ID,
'usd':USD_Price,
'mention':Mention_Name,
'cur':cur,
'time':new Date(),
'servertime':Server_Time
};

let user_active_investments_history = Bot.getProperty("user_active_investments_history"+user.telegramid)
if(!user_active_investments_history){
var push_mode_i=[ ]
}else{
var push_mode_i=user_active_investments_history
}
push_mode_i.push(mok56)
Bot.setProperty("user_active_investments_history"+user.telegramid,push_mode_i,"json")
}
