/*CMD
  command: /onp1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔒 Coinpayments Key
  answer: 
  keyboard: 
  aliases: 
CMD*/

let json = options.body.result
let cur = Bot.getProperty("cur")
let rate = json[cur].balancef
if(!rate){ return }
let id = User.getProperty("adminmsgid")
let txt = "*💵 Account Balance:\n\nYour CoinPayment Balance Is:*\n`"+rate+" "+cur+"`"
if(params){
Bot.editMessage(txt,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/admincpjeyset01"}]]
Bot.editInlineKeyboard(b,id)
}else{
return}
