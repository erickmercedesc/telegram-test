/*CMD
  command: /onmulti
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š± Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!content){
return
}
let cur = params
let min = Bot.getProperty("adminmindepo01","āļø Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","āļø Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","āļø Not Set")

let User_Wallet_Deposit = Bot.getProperty("User_Wallet_Deposit"+user.telegramid+"_"+cur);
if (!User_Wallet_Deposit){
Libs.CoinPayments.createPermanentWallet({
  currency: cur,
  label: "myLabel",
  onSuccess: "/onMultiWalletCreation "+cur,
  onIncome: "/onSecret_Multi_Deposit"
});
return
}
var result = JSON.parse(content)
var Price = result.ticker.price
let Minimum_Deposit = Price*min
let line = "\nā¢ āāāāāāāāāāāāāāāāā ā¢\n"
let inlkey = [[{ text: "ā¬ļø Return", callback_data: "/multicurrency r" }]]
Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl="+User_Wallet_Deposit+"&chld=H|0",
      caption: ""+line+"<i>ā ļø If You Send Less Than "+Minimum_Deposit.toFixed(8)+" "+cur+", Your Deposit Will Be Ignored!</i>\n\n<b>ā Send The Amount You Want To Invest To The Following Address:</b>"+line+"<code>"+User_Wallet_Deposit+"</code>"+line+"",
      parse_mode: "HTML" },
    reply_markup: { inline_keyboard: inlkey }
  })
