/*CMD
  command: /Calculator_Result_USD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🖥 Calculator
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("cur","⛔️ Not Set")
HTTP.get({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols="+cur.toLowerCase()+"",
  success: "/Calculator_Result "+message+""
})
