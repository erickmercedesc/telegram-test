/*CMD
  command: /Secret_Refferral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "✅ On"){
Bot.sendMessage("*🛠 Maintenance In Progress!*\n\n_▪️ Bot Administration Does Some Technical Work Within This Bot.\n▪️ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\n▪️ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_☞ 🔐 Secret Panel | ⚙ Main Settings | 🔘 Maintenance Mode_\n\n*For The Users:*\n_ℹ️ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let result = JSON.parse(content)
let usd = result[0].current_price
let msgid = User.getProperty("usermsgid")
var cur = Bot.getProperty("cur","⛔️ Not Set")
let Referral_Link =  "https://t.me/"+bot.name+"?start="+user.telegramid+""
let Refinv = Libs.ResourcesLib.userRes("refinv")
let Bonus = Libs.ResourcesLib.userRes("bonus")

let lvl = Libs.ResourcesLib.userRes("Ref_1")
let lv2 = Libs.ResourcesLib.userRes("Ref_2")
let lv3 = Libs.ResourcesLib.userRes("Ref_3")

let RefCom_LV1 = Bot.getProperty("RefCom_LV1","⛔ Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","⛔ Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","⛔ Not set")

let RefInv_USD = Refinv.value()*usd
let Bonus_USD = Bonus.value()*usd
var btn1 = [[{ title: "📑 Detailed Report 📑", command: "/Detailed_Report"}],[{ title:"↗️ Share Link", url:"https://t.me/share/url?url="+Referral_Link+"" }]]
var btn2 = [[{ text: "📑 Detailed Report 📑", callback_data: "/Detailed_Report"}],[{ text:"↗️ Share Link", url:"https://t.me/share/url?url="+Referral_Link+"" }]]
let line = "\n• ━━━━━━━━━━━━━━━━━ •\n"
var text = ""+line+"*» 👥 Refferral Statistics «\n\n1️⃣ Level:* `"+lvl.value()+" Users` ⤍ 🥇 "+RefCom_LV1+"%\n*2️⃣ Level:* `"+lv2.value()+" Users` ⤍ 🥈 "+RefCom_LV2+"%\n*3️⃣ Level:* `"+lv3.value()+" Users` ⤍ 🥉 "+RefCom_LV3+"%"+line+"*» 🌐 Refferral Deposits: «*\n `"+Refinv.value().toFixed(8)+" "+cur+" ~ "+RefInv_USD.toFixed(4)+" $`\n\n*» ♾ Earnings: «*\n `"+Bonus.value().toFixed(8)+" "+cur+" ~ "+Bonus_USD.toFixed(4)+" $`"+line+"*» 🔗 Refferral Direct Bot Url: «*\n`"+Referral_Link+"`"+line+""
if(params=="r"){
Api.editMessageText({ text:text, message_id:msgid, parse_mode:"Markdown", reply_markup: {inline_keyboard: btn2 } })
}else{
Bot.sendInlineKeyboard(btn1,text,{on_result:"/usermsgid"})
}
