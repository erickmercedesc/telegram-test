/*CMD
  command: /multicurrency
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐ฑ Multicurrency
  answer: 
  keyboard: 
  aliases: ๐ฑ multicurrency
CMD*/

let cur = Bot.getProperty("cur","โ๏ธ Not Set")
let min = Bot.getProperty("adminmindepo01","โ๏ธ Not Set")
let max = Bot.getProperty("adminmaxdepo01","โ๏ธ Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","โ๏ธ Not Set")
let Daily_Expired = Bot.getProperty("daily_expired","โ๏ธ Not Set")

let inlkey =  [[{text:"TRX",callback_data:"/multidep TRX"},{text:"DOGE",callback_data:"/multidep DOGE"},{text:"BTT",callback_data:"/multidep BTT"}]
,[{text:"BTC",callback_data:"/multidep BTC"},{text:"BCH",callback_data:"/multidep BCH"},{text:"ETH",callback_data:"/multidep ETH"}],[{text:"LTC",callback_data:"/multidep LTC"},{text:"BNB",callback_data:"/multidep BNB"}]]
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
let text = ""+line+"<b>โ Welcome! Here You Can Start A New Investment!</b>\n\n<i>๐ต We Offer Up To 2 Different Investment Plans, Choose The Best For You!</i>"+line+"<b>1๏ธโฃ From "+min+" "+cur+" To "+max+" "+cur+"</b>\n<i>ยป "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day ยซ</i>\n\n<b>2๏ธโฃ From "+min+" "+cur+" To "+max+" "+cur+"</b>\n<i>ยป "+Percentage_Plan+".00% Daily For "+Daily_Expired+" Day ยซ</i>"+line+""

let Photo = "https://i.imgur.com/y3Fs25Y.jpg"

if (params == "r") {
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: Photo,
      caption: text,
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: inlkey }
  })
  return
}
Api.sendPhoto({ photo:Photo, caption:text, parse_mode:"HTML", reply_markup: { inline_keyboard: inlkey } })
