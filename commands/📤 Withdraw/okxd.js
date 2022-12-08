/*CMD
  command: okxd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📤 Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = options.body.result
let Txn_ID = result.send_txid
let Wallet = result.send_address
let Amount = result.amountf
let Currency = result.coin
let Status = result.status_text
let channel = Bot.getProperty("autopost")
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")

Api.sendMessage({chat_id: channel, text: "*➖ New Withdraw\n\n👤 By User:* `"+user.first_name+"`\n*💰 Amount:* `"+Amount+" "+Currency+"`\n\n*🔗 Transaction Hash:* \n["+Txn_ID+"](https://tx.botdev.me/"+Currency+"/"+Txn_ID+")",parse_mode : "Markdown" , disable_web_page_preview: true
});

if(Status=="Complete"){
Api.sendMessage({text: "*💵 The Payment Processor Has Approved Your Withdrawal And It Has Been Sent Successfully:* `"+Amount+" "+Currency+"` In Your Wallet \n`"+Wallet+"`\n\n*🔗 Transaction Hash:*\n["+Txn_ID+"](https://tx.botdev.me/"+Currency+"/"+Txn_ID+")",
parse_mode: "Markdown",
disable_web_page_preview: true})
Bot.setProperty("wdtxid"+user.telegramid+wdlist.value(),Txn_ID,"string")
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"✅ Paid","string")
}
