/*CMD
  command: /onCoinPayment_Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐๏ธ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = JSON.parse(content)
let usd = result[0].current_price
let json = options.body.result
var cur = Bot.getProperty("cur")
let Balance = json[cur].balancef
let Balance_USD = Balance*usd
if(!Balance){ return }
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
let text = ""+line+"<b>ยป ๐ฆ CoinPayment Balance ยซ</b>"+line+"<code>"+Balance+" "+cur+" ~ "+Balance_USD.toFixed(4)+" $</code>"+line+""
Api.sendMessage({ text: text, parse_mode: "HTML" })
