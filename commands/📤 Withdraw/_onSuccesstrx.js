/*CMD
  command: /onSuccesstrx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: đ¤ Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = options.body.result;
let Error = options.body.error;
let Amount = result.amount;
let Payment_ID = result.id;
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
let wallet = User.getProperty("wallet");
let cur = Bot.getProperty("cur")

let admin = Bot.getProperty("adminlogin")
let Profile_Mention = '<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
if (Error=="ok"){
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"â˛ Processing","string")
Bot.sendMessage("*â Withdrawal Requested*\n_Your Payment Will Be Processed Automatically!_\n\n*đ Payment ID:*\n`"+Payment_ID+"`\n_You Will Receive The TXID Soon._\n\n*đŗ Transaction Details:*\n`"+Amount+" "+cur+"` To Wallet\n`"+wallet+"`");
Bot.run({
command: "onPaymentCompletedtrx",
run_after: 1*60*3,
options: { id: Payment_ID }
});
let Text_1 = "â <b>Withdrawal Notification</b>\n"+Profile_Mention+" Just Made A Withdrawal Of "+Amount+" "+cur+" To The Wallet \n"+"<code>"+wallet+"</code>"
if(admin){
Api.sendMessage({chat_id:admin, text:Text_1, parse_mode:"html"})
}
}else{
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"đ Cancelled","string")
Bot.sendMessage("*đ That Amount Is Larger Than Your Balance!*")
let Text_2 = "â ī¸ Cant Pay Autometically To The User "+Profile_Mention+"\n\n<b>âšī¸ Reason:</b> <i>"+Error+"</i>"
Api.sendMessage({chat_id:admin, text:Text_2, parse_mode:"html"})
 }
