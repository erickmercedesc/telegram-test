/*CMD
  command: /NewInv
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔃 Reinvest
  answer: 
  keyboard: 
  aliases: 
CMD*/

let channel = Bot.getProperty("autopost")
var Percentage_Plan = Bot.getProperty("PercentagePlan")
var Profit_Value = Bot.getProperty("InvestmentPlan")
var reinvest = Libs.ResourcesLib.userRes("reinvest");
var deposit = Libs.ResourcesLib.userRes("deposit");
var ST_Total_Reinvestments = Libs.ResourcesLib.anotherChatRes("ST_Total_Reinvestments", "global")
var info =""+user.first_name+""
var history = User.getProperty("history"+user.telegramid); 
var num = Libs.Random.randomInt(20,800)
var min = Bot.getProperty("adminmireind01")
var cur = Bot.getProperty("cur")
var balance = Libs.ResourcesLib.userRes("balance")
let time = new Date().toLocaleString("en-US", {
  timeZone: "America/Mexico_City"})

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild Value. Enter Only Numeric Value. Try Again*",{is_reply:true})
return
}

if(message < min ){
Bot.sendMessage("*❌ You Can Not Reinvest Right Now:* _You Need At Least "+min+" "+cur+" To Reinvest!_")
}else{
if(message > balance.value()){
Bot.sendMessage("*🚫 Insufficient Balance\n\nYour balance:* `"+balance.value().toFixed(8)+" "+cur+"`")
}else{
Bot.sendMessage("*✅ Re-Investment Started At Now*\n\n_- Plan Type: "+Percentage_Plan+".00% Every 24 Hours For 1 Days\n\n💳 Profit Will Credited Into Your Withdrawable Balance With "+Percentage_Plan+".00% On Every 24 Hours_\n\n*💵 Invested Amount:* `"+message+" "+cur+"`\n\n*🧮 Expected Returns:* `"+Profit_Value*message+" "+cur+"`");
balance.add(-message)
deposit.add(+message)
ST_Total_Reinvestments.add(+message)
reinvest.add(+message)
Bot.run({
command : "/Secret-Adc",
run_after : 1*60*60*24,
options: { amount: message }
});
Api.sendMessage({chat_id: ""+channel+"", text: "*♻️ New Reinvestment\n\n👤 User:* `"+info+"`\n\n*💰 Amount Reinvested:* `"+message+" "+cur+"`\n\n*🕓 Server Time:* \n`"+time+"`",parse_mode : "Markdown" , disable_web_page_preview: true
})
}
}
if(history == undefined){
var newh = "*🔄 Reinvestment ID:* `"+num+"`\n*📥 Your Reinvestment:* `"+message+" "+cur+"`\n*🕥 Reinvestment Started:* `"+time+"`\n*⏳ Duration:* `24 Hours`\n*💹 Expected Return:* `"+Profit_Value*message+" "+cur+"`\n\n";
User.setProperty("history"+user.telegramid,newh,"string")
}else{
var nwh = "*🔄 Reinvestment ID:* `"+num+"`\n*📥 Your Reinvestment:* `"+message+" "+cur+"`\n*🕥 Reinvestment Started:* `"+time+"`\n*⏳ Duration:* `24 Hours`\n*💹 Expected Return:* `"+Profit_Value*message+" "+cur+"`\n\n";
var toal = nwh+history;
User.setProperty("history"+user.telegramid,toal,"string")
}
