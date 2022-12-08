/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!request.query){ return }
var query = request.query.toLowerCase();
var list = [];

let Percentage_Plan = Bot.getProperty("PercentagePlan","⛔️ Not Set")
let depo1 = Bot.getProperty("adminmindepo01","⛔️ Not Set")
let rein2 = Bot.getProperty("adminmireind01","⛔️ Not Set")
let wit3 = Bot.getProperty("adminminwd01","⛔️ Not Set")
let maxdepo = Bot.getProperty("adminmaxdepo01","⛔️ Not Set")

let Referral_Link =  "https://t.me/"+bot.name+"?start="+user.telegramid+""
let cur = Bot.getProperty("cur","⛔️ Not Set")
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","⛔ Not set")
let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let lvl = Libs.ResourcesLib.userRes("ref")
let refcom = Libs.ResourcesLib.userRes("refcom")
let TRX = 20*refcom.value()

function  replyMarkupFor(){
   return { inline_keyboard: [
    [  { text: "⟨ Enter The Bot ⟩", url: ""+Referral_Link+""}   ]
  ]}
}

function getGoodsDescription(){
  return "*🗣 Referral Statistics\n\n1° Level:* `"+lvl.value()+" Users→🥇 "+RefCom_LV1+"%`\n\n*🗣 Referral Deposits:*\n`"+TRX.toFixed(8)+" "+cur+"`\n\n*♾ Earnings:* \n`"+refcom.value().toFixed(8)+" "+cur+"`\n\n*🗣 Referral Direct Bot Url:*\n`"+Referral_Link+"`" ;
}

function addItempromo(){
var image_url =  "https://telegra.ph/file/b9197e17e0d2dfd68cd62.jpg"

 var promo_text = "*🌐 Secret "+cur+" Investment 🌐\n\n💵 Currency:* `"+cur+"`\n*🔋 State:* `Paying`\n\n*💳 Investment Plan:\n📊 Profits:* `"+Percentage_Plan+".00% In 24 Hours`\n\n*📥 Minimum Investment:* `"+depo1+" "+cur+"`\n*➕ Maximum Investment:* `"+maxdepo+" "+cur+"`\n*🔃 Minimum Reinvestment:* `"+rein2+" "+cur+"`\n*📤 Minimum Withdrawal:* `"+wit3+" "+cur+"`\n\n*⛔ Instant / Automatic Withdrawal\n👥 Reference:* `"+RefCom+"%`\n\n*🤖 Direct Link For Bot:* \n`"+Referral_Link+"`"

  list.push({
    type: "article",
    id: "promo",
    title: "💥 Promotional",
description: "• Click Here To Share A Promotional Message From The Bot.",
    thumb_url: image_url,
input_message_content: {
       "message_text": promo_text,
        parse_mode: "markdown",  
        disable_web_page_preview: true} 
  })
}

function addItemToList(){
var image_url =  "https://telegra.ph/file/b9197e17e0d2dfd68cd62.jpg"

  list.push({
    type: "article",
    id: "share",
    title: "🗣️ Refferal Link" ,
    description: "• Click Here Share Your Refferal Link.",
    thumb_url: image_url,
    input_message_content: {
       "message_text": getGoodsDescription(),
        parse_mode: "Markdown",
        disable_web_page_preview: true
    },
    reply_markup: replyMarkupFor()
  })
}

  if(query=="promo"){
    addItempromo()
  }else if(query=="share"){
    addItemToList() }
 
Api.answerInlineQuery({
  inline_query_id: request.id,
  results: list,
  cache_time: 5 
})
