/*CMD
  command: ⚜️ Details
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: /details, ⁉️ about
CMD*/

let channel = Bot.getProperty("autopost")
let Percentage_Plan = Bot.getProperty("PercentagePlan","⛔️ Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","⛔️ Not Set")
let Min_Depo = Bot.getProperty("adminmindepo01","⛔️ Not Set")
let Max_Depo = Bot.getProperty("adminmaxdepo01","⛔️ Not Set")
let Rein = Bot.getProperty("adminmireind01","⛔️ Not Set")
let Min_Wd = Bot.getProperty("adminminwd01","⛔️ Not Set")
let cur = Bot.getProperty("cur","⛔️ Not Set")
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","⛔ Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","⛔ Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","⛔ Not set")
let line = "\n• ━━━━━━━━━━━━━━━━━━━━━━ •\n"
var text = ""+line+"<b>💹 Investment Plan:</b> <code>"+Percentage_Plan+"% For "+Daily_Expired+" Days</code>\n<b>💸 Withdrawals And Scraps Every Day.\n🏦 Investment Currency:</b> <code>"+cur+"</code>"+line+"<b>📥 Minimum Investment:</b> <code>"+Min_Depo+" "+cur+"</code>\n<b>➕ Maximum Investment:</b> <code>"+Max_Depo+" "+cur+"</code>\n<b>🔃 Minimum Reinvestment:</b> <code>"+Rein+" "+cur+"</code>\n<b>📤  Minimum Withdrawal:</b> <code>"+Min_Wd+" "+cur+"</code>\n<b>❌ Fee Per Withdrawal:</b> <code>2 TRX</code>\n<b>👥 Earning From Referrals:</b>\n<code> LV1("+RefCom_LV1+"%) ~ LV2("+RefCom_LV2+"%) ~ LV3("+RefCom_LV3+"%)</code>"+line+"<i>ℹ️ This Cryptocurrency Investment Bot Offers A "+Percentage_Plan+"% Return On Your Investment In "+Daily_Expired+" Days, So When You Complete Your Investment You Can Reinvest Or Withdraw The Amount You Want, Your Balance In The Bot Increases Thanks To The Commercial Operations We Carry Out, We Also Offer Investment Bot Advertising Services That Allow Us To Increase Capital And Increase The Durability Of The Bot That Will Remain Online.</i>"+line+"<b>🤖 Direct Link For Bot:</b> <i>@"+bot.name+"</i>\n<b>💸 Payment Channel:</b> <i>"+channel+"</i>"+line+""
Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true })
