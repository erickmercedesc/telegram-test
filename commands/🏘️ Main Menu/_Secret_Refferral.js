/*CMD
  command: /Secret_Refferral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐๏ธ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let mode = Bot.getProperty("mode")
if(mode == "โ On"){
Bot.sendMessage("*๐  Maintenance In Progress!*\n\n_โช๏ธ Bot Administration Does Some Technical Work Within This Bot.\nโช๏ธ Due To This Reason, The Menu Was Deactivated By Administrators And Is Not Available At This Time.\nโช๏ธ All Functionality Will Return After Completion Of Maintenance._\n\n*If You Are An Admin Of This Bot, You Can Change This Mode By Entering:*\n_โ ๐ Secret Panel | โ Main Settings | ๐ Maintenance Mode_\n\n*For The Users:*\n_โน๏ธ You Can Come Back Later And Press /start To Check The Status Of The Bot._")
return
}
let result = JSON.parse(content)
let usd = result[0].current_price
let msgid = User.getProperty("usermsgid")
var cur = Bot.getProperty("cur","โ๏ธ Not Set")
let Referral_Link =  "https://t.me/"+bot.name+"?start="+user.telegramid+""
let Refinv = Libs.ResourcesLib.userRes("refinv")
let Bonus = Libs.ResourcesLib.userRes("bonus")

let lvl = Libs.ResourcesLib.userRes("Ref_1")
let lv2 = Libs.ResourcesLib.userRes("Ref_2")
let lv3 = Libs.ResourcesLib.userRes("Ref_3")

let RefCom_LV1 = Bot.getProperty("RefCom_LV1","โ Not set")
let RefCom_LV2 = Bot.getProperty("RefCom_LV2","โ Not set")
let RefCom_LV3 = Bot.getProperty("RefCom_LV3","โ Not set")

let RefInv_USD = Refinv.value()*usd
let Bonus_USD = Bonus.value()*usd
var btn1 = [[{ title: "๐ Detailed Report ๐", command: "/Detailed_Report"}],[{ title:"โ๏ธ Share Link", url:"https://t.me/share/url?url="+Referral_Link+"" }]]
var btn2 = [[{ text: "๐ Detailed Report ๐", callback_data: "/Detailed_Report"}],[{ text:"โ๏ธ Share Link", url:"https://t.me/share/url?url="+Referral_Link+"" }]]
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
var text = ""+line+"*ยป ๐ฅ Refferral Statistics ยซ\n\n1๏ธโฃ Level:* `"+lvl.value()+" Users` โค ๐ฅ "+RefCom_LV1+"%\n*2๏ธโฃ Level:* `"+lv2.value()+" Users` โค ๐ฅ "+RefCom_LV2+"%\n*3๏ธโฃ Level:* `"+lv3.value()+" Users` โค ๐ฅ "+RefCom_LV3+"%"+line+"*ยป ๐ Refferral Deposits: ยซ*\n `"+Refinv.value().toFixed(8)+" "+cur+" ~ "+RefInv_USD.toFixed(4)+" $`\n\n*ยป โพ Earnings: ยซ*\n `"+Bonus.value().toFixed(8)+" "+cur+" ~ "+Bonus_USD.toFixed(4)+" $`"+line+"*ยป ๐ Refferral Direct Bot Url: ยซ*\n`"+Referral_Link+"`"+line+""
if(params=="r"){
Api.editMessageText({ text:text, message_id:msgid, parse_mode:"Markdown", reply_markup: {inline_keyboard: btn2 } })
}else{
Bot.sendInlineKeyboard(btn1,text,{on_result:"/usermsgid"})
}
