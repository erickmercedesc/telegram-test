/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ποΈ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!request.query){ return }
var query = request.query.toLowerCase();
var list = [];

let Percentage_Plan = Bot.getProperty("PercentagePlan","βοΈ Not Set")
let depo1 = Bot.getProperty("adminmindepo01","βοΈ Not Set")
let rein2 = Bot.getProperty("adminmireind01","βοΈ Not Set")
let wit3 = Bot.getProperty("adminminwd01","βοΈ Not Set")
let maxdepo = Bot.getProperty("adminmaxdepo01","βοΈ Not Set")

let Referral_Link =  "https://t.me/"+bot.name+"?start="+user.telegramid+""
let cur = Bot.getProperty("cur","βοΈ Not Set")
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","β Not set")
let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let lvl = Libs.ResourcesLib.userRes("ref")
let refcom = Libs.ResourcesLib.userRes("refcom")
let TRX = 20*refcom.value()

function  replyMarkupFor(){
   return { inline_keyboard: [
    [  { text: "β¨ Enter The Bot β©", url: ""+Referral_Link+""}   ]
  ]}
}

function getGoodsDescription(){
  return "*π£ Referral Statistics\n\n1Β° Level:* `"+lvl.value()+" Usersβπ₯ "+RefCom_LV1+"%`\n\n*π£ Referral Deposits:*\n`"+TRX.toFixed(8)+" "+cur+"`\n\n*βΎ Earnings:* \n`"+refcom.value().toFixed(8)+" "+cur+"`\n\n*π£ Referral Direct Bot Url:*\n`"+Referral_Link+"`" ;
}

function addItempromo(){
var image_url =  "https://telegra.ph/file/b9197e17e0d2dfd68cd62.jpg"

 var promo_text = "*π Secret "+cur+" Investment π\n\nπ΅ Currency:* `"+cur+"`\n*π State:* `Paying`\n\n*π³ Investment Plan:\nπ Profits:* `"+Percentage_Plan+".00% In 24 Hours`\n\n*π₯ Minimum Investment:* `"+depo1+" "+cur+"`\n*β Maximum Investment:* `"+maxdepo+" "+cur+"`\n*π Minimum Reinvestment:* `"+rein2+" "+cur+"`\n*π€ Minimum Withdrawal:* `"+wit3+" "+cur+"`\n\n*β Instant / Automatic Withdrawal\nπ₯ Reference:* `"+RefCom+"%`\n\n*π€ Direct Link For Bot:* \n`"+Referral_Link+"`"

  list.push({
    type: "article",
    id: "promo",
    title: "π₯ Promotional",
description: "β’ Click Here To Share A Promotional Message From The Bot.",
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
    title: "π£οΈ Refferal Link" ,
    description: "β’ Click Here Share Your Refferal Link.",
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
