/*CMD
  command: /demodepo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: š¦ demo depo
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){

let channel = Bot.getProperty("autopost")
var amount = params
var amountt = amount*1000
var txn_id = "6a3a20f4647fe9ca075a14a31da02303253d2f9fdad2d0b5a62e5be1ded0db18"

var info = "" +user.first_name +"";

// see another fields by
//Bot.sendMessage(inspect(options));

if (amount>= 0.05 && amount <=1000){
Bot.sendMessage ("*ā Your Deposit Confirmed\n\nš“ Invested Amount:* `"+amount+" DGB`\n\n*ā Total Received Hashes:* `"+amountt+" ā”ļø`");
  Api.sendMessage ({chat_id: ""+channel+"", text: "*ā New Deposit\n\nš¤ By User:* `"+info+"`\n*š° Amount:* `"+amount+"`\n\n*š Transaction Hash:*\n["+txn_id+"](https://digiexplorer.info/tx/"+txn_id+")",parse_mode : "Markdown" , disable_web_page_preview: true
})
}}else{
return}

