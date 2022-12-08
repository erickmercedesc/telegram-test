/*CMD
  command: /witdpay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📤 Withdraw

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
var ST_Total_Withdrawals = Libs.ResourcesLib.anotherChatRes("ST_Total_Withdrawals","global")
var withdraw = Libs.ResourcesLib.userRes("withdraw");
var min = Bot.getProperty("adminminwd01")
var cur = Bot.getProperty("cur","⛔️ Not Set")
let Server_Time = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"})
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
wdlist.add(1)
if(message < min){
Bot.sendMessage("_❌ You Have To Own At Least "+min+" "+cur+" In Your Wallet To Withdraw!_")
}else{
if(message > balance.value()){
Bot.sendMessage("*🚫 Your Balance Is:* `"+balance.value().toFixed(8)+" "+cur+"`")
}else{
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"⏱ Pending","string")
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal", 
  amount: message, 
  currency: cur, 
  address: wallet, 
  auto_confirm: 1 }, 
  onSuccess: '/onSuccesstrx'
});
balance.add(-message)
ST_Total_Withdrawals.add(+message)
withdraw.add(+message)
}
}

let hst = Bot.getProperty("withdrawals"+user.telegramid)
if(!hst){
Bot.setProperty("withdrawals"+user.telegramid,"➖ Withdrawal: #1\n📅 Time: "+Server_Time+" \n💰 Amount: "+message+" "+cur+" \n💳 To the wallet: "+" "+wallet+""," string")
}else{
Bot.setProperty("withdrawals"+user.telegramid,hst+"\n\n"+"➖ Withdrawal: #"+wdlist.value()+"\n📅 Time: "+Server_Time+" \n💰 Amount: "+message+" "+cur+" \n💳 To the wallet: "+" "+wallet+"")
}

let megax={
name: user.first_name,
wd_amount: message, 
wd_time: new Date(),
wd_procced_type: " Autometically",
wd_procced_text: "Withdrawal Autometically Procced",
wd_currency: cur,
wd_wallet: wallet,
wd_id:wdlist.value(),
servertime:Server_Time
}

let user_withdrawals_history = Bot.getProperty("withdrawals_history"+user.telegramid)
if(!user_withdrawals_history){
var push_mode_i=[ ]
}else{
var push_mode_i = user_withdrawals_history
}
push_mode_i.push(megax)
Bot.setProperty("withdrawals_history"+user.telegramid,push_mode_i,"json")
