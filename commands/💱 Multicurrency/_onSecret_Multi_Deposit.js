/*CMD
  command: /onSecret_Multi_Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("cur")
User.setProperty("Secret_Multi_Deposit",options,"json")
let Currency = options.currency
let Amount = options.amount
HTTP.get({ url: "https://api.cryptonator.com/api/ticker/"+Currency+"-"+cur,
success:"/onSecret_Complete_Multi_Deposit "+Amount
})
