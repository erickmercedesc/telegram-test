/*CMD
  command: /Calculator_Result
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ๐ฅ Calculator
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = JSON.parse(content)
let usd = result[0].current_price
let Amount = parseFloat(params);
let min = Bot.getProperty("adminmindepo01","โ๏ธ Not Set")
let max = Bot.getProperty("adminmaxdepo01","โ๏ธ Not Set")
let cur = Bot.getProperty("cur","โ๏ธ Not Set")
let Plan_Hr = Bot.getProperty("daily_hour1","โ๏ธ Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","โ๏ธ Not Set")
let Profit_Value = Bot.getProperty("InvestmentPlan","โ๏ธ Not Set")
let Profit = Amount*Profit_Value;
let Profit_USD = Profit*usd

let RefCom_LV1 = Bot.getProperty("RefCom_LV1","โ Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","โ Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","โ Not set")

let Ref_Bonus_Lv1 = Bot.getProperty("RefCom%01")
let Bonus_Lv1 = Amount*Ref_Bonus_Lv1
let Ref_Bonus_Lv2 = Bot.getProperty("RefCom%02")
let Bonus_Lv2 = Amount*Ref_Bonus_Lv2
let Ref_Bonus_Lv3 = Bot.getProperty("RefCom%03")
let Bonus_Lv3 = Amount*Ref_Bonus_Lv3

let Ref_Bonus_Lv1_USD = Ref_Bonus_Lv1*usd
let Ref_Bonus_Lv2_USD = Ref_Bonus_Lv2*usd
let Ref_Bonus_Lv3_USD = Ref_Bonus_Lv3*usd

let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
let Space1 = "     "
let Space2 = "  "
if (Amount >= min && Amount <= max ){
Bot.sendMessage(""+line+""+Space1+"*ยป ๐ฅ Referral Earnings ยซ*"+line+"*๐ Referral Commission:* _5% Will Get The One That Referred You._\n\n*1๏ธโฃ Level โค ๐ฅ "+RefCom_LV1+"%* \n`"+Bonus_Lv1.toFixed(8)+" "+cur+" ~ "+Ref_Bonus_Lv1_USD.toFixed(4)+" $`\n*2๏ธโฃ Level โค ๐ฅ "+RefCom_LV2+"%* \n`"+Bonus_Lv2.toFixed(8)+" "+cur+" ~ "+Ref_Bonus_Lv2_USD.toFixed(4)+" $`\n*3๏ธโฃ Level โค ๐ฅ "+RefCom_LV3+"%* \n`"+Bonus_Lv3.toFixed(8)+" "+cur+" ~ "+Ref_Bonus_Lv3_USD.toFixed(4)+" $`"+line+""+Space2+"*ยป ๐น Investment Earnings ยซ*"+line+"*โ๏ธ Investment Plan:* _"+Percentage_Plan+".00% Daily For 1 Day.\nโฑ Your first payment will arrive after "+Plan_Hr+" Hours!\nโ You Will Get Back More Than What You Invested After Just "+Plan_Hr+" Hours._"+line+"*๐ฐ Total Profit On Investment:*\n`"+Profit.toFixed(8)+" "+cur+" ~ "+Profit_USD.toFixed(4)+" $`"+line+"")
}
