/*CMD
  command: /Secret_Multi_Adc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Profit_Value = Bot.getProperty("InvestmentPlan")
let Amount = options.amount
let Dep_ID = options.depid
let Currency = options.cur
let Investment_Accrual_1 = Profit_Value*Amount
let Investment_Accrual = Investment_Accrual_1.toFixed(8)
Bot.sendMessage("*➕ Investment Accrual:* `+"+Investment_Accrual+" "+Currency+"`")

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(Investment_Accrual_1)
let depo = Libs.ResourcesLib.userRes("deposit")
depo.remove(Amount)
let profit = Libs.ResourcesLib.userRes("profit")
profit.add(Investment_Accrual_1)

let user_acti7 = Bot.getProperty("user_active_investments_history"+user.telegramid, [ ])
if(user_acti7.length>0){
let delete_id = user_acti7.findIndex(x => x.id==Dep_ID);
delete user_acti7[delete_id]
var remove_null = user_acti7.filter(function (el) {
    return el != null && el != "";
  });
}
Bot.setProperty("user_active_investments_history"+user.telegramid,remove_null,"json")

var json_u = {
amount:Investment_Accrual,
investment:Amount,
cur:Currency,
servertime:new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"}),
date:new Date(),
id:Dep_ID,
user:user.first_name
}
let expired_his = Bot.getProperty("user_expired_investments"+user.telegramid, [ ])
expired_his.push(json_u)
Bot.setProperty("user_expired_investments"+user.telegramid,expired_his,"json")
