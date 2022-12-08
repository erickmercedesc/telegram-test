/*CMD
  command: 🔍 Check Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: *➡️  Send The User ID To Verify The User's Balance.*
  keyboard: 
  aliases: /admincheckbalance01
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
var id = message; 
var cur = Bot.getProperty("cur")
var price = "USD"
let balance = Libs.ResourcesLib.anotherUserRes("balance",id);
let deposit = Libs.ResourcesLib.anotherUserRes("deposit",id);
let reinvest = Libs.ResourcesLib.anotherUserRes("reinvest",id);
let profit = Libs.ResourcesLib.anotherUserRes("profit",id);
let refcom = Libs.ResourcesLib.anotherUserRes("refcom",id);
let withdraw = Libs.ResourcesLib.anotherUserRes("withdraw",id);

let inf = "[User Link](tg://user?id="+id+")";

var bal = CurrencyQuote.convert({ amount: balance.value().toFixed(8), from: cur, to: price})
var depo = CurrencyQuote.convert({ amount: deposit.value().toFixed(8), from: cur, to: price})
var rein = CurrencyQuote.convert({ amount: reinvest.value().toFixed(8), from: cur, to: price})
var prof = CurrencyQuote.convert({ amount: profit.value().toFixed(8), from: cur, to: price})
var ref = CurrencyQuote.convert({ amount: refcom.value().toFixed(8), from: cur, to: price})
var withd = CurrencyQuote.convert({ amount: withdraw.value().toFixed(8), from: cur, to: price})

Bot.sendMessage("*👤 Account Summary:*  "+inf+
"\n\n*➖ Withdrawable Balance:*\n`"+balance.value().toFixed(8)+" "+cur+" ~ "+bal.toFixed(2)+" "+price+"`\n\n*💳 Active Investments:*\n`"+deposit.value().toFixed(8)+" "+cur+" ~ "+depo.toFixed(2)+" "+price+"`\n\n*♻️ Total Reinvest:*\n`"+reinvest.value().toFixed(8)+" "+cur+" ~ "+rein.toFixed(2)+" "+price+"`\n\n*💰Total Profit:*\n`"+profit.value().toFixed(8)+" "+cur+" ~ "+prof.toFixed(2)+" "+price+"`\n\n*🎁 Total Affiliate Bonus:*\n`"+refcom.value().toFixed(8)+" "+cur+" ~ "+ref.toFixed(2)+" "+price+"`\n\n*💸 Total Withdrawn:*\n`"+withdraw.value().toFixed(8)+" "+cur+" ~ "+withd.toFixed(2)+" "+price+"`");

}else{
return
}
