/*CMD
  command: āļø Details
  help: 
  need_reply: false
  auto_retry_time: 
  folder: šļø Main Menu
  answer: 
  keyboard: 
  aliases: /details, āļø about
CMD*/

let channel = Bot.getProperty("autopost")
let Percentage_Plan = Bot.getProperty("PercentagePlan","āļø Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","āļø Not Set")
let Min_Depo = Bot.getProperty("adminmindepo01","āļø Not Set")
let Max_Depo = Bot.getProperty("adminmaxdepo01","āļø Not Set")
let Rein = Bot.getProperty("adminmireind01","āļø Not Set")
let Min_Wd = Bot.getProperty("adminminwd01","āļø Not Set")
let cur = Bot.getProperty("cur","āļø Not Set")
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","ā Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","ā Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","ā Not set")
let line = "\nā¢ āāāāāāāāāāāāāāāāāāāāāā ā¢\n"
var text = ""+line+"<b>š¹ Investment Plan:</b> <code>"+Percentage_Plan+"% For "+Daily_Expired+" Days</code>\n<b>šø Withdrawals And Scraps Every Day.\nš¦ Investment Currency:</b> <code>"+cur+"</code>"+line+"<b>š„ Minimum Investment:</b> <code>"+Min_Depo+" "+cur+"</code>\n<b>ā Maximum Investment:</b> <code>"+Max_Depo+" "+cur+"</code>\n<b>š Minimum Reinvestment:</b> <code>"+Rein+" "+cur+"</code>\n<b>š¤  Minimum Withdrawal:</b> <code>"+Min_Wd+" "+cur+"</code>\n<b>ā Fee Per Withdrawal:</b> <code>2 TRX</code>\n<b>š„ Earning From Referrals:</b>\n<code> LV1("+RefCom_LV1+"%) ~ LV2("+RefCom_LV2+"%) ~ LV3("+RefCom_LV3+"%)</code>"+line+"<i>ā¹ļø This Cryptocurrency Investment Bot Offers A "+Percentage_Plan+"% Return On Your Investment In "+Daily_Expired+" Days, So When You Complete Your Investment You Can Reinvest Or Withdraw The Amount You Want, Your Balance In The Bot Increases Thanks To The Commercial Operations We Carry Out, We Also Offer Investment Bot Advertising Services That Allow Us To Increase Capital And Increase The Durability Of The Bot That Will Remain Online.</i>"+line+"<b>š¤ Direct Link For Bot:</b> <i>@"+bot.name+"</i>\n<b>šø Payment Channel:</b> <i>"+channel+"</i>"+line+""
Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true })
