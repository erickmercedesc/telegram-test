/*CMD
  command: /changekeyforcommandcpkeys01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔒 Coinpayments Key
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let text = "_Now enter your_ [coinpayments](http://www.coinpayments.net) *Private Key*\n->Find your private key in Acount button>Api keys\n\n*Enter your PRIVATE KEY from coinpayments acount*"
Api.editMessageText({chat_id: chat.chatid, message_id: id, text: text, disable_web_page_preview:true,parse_mode:"markdown"})
Bot.runCommand("/commandforsetkeyinprivcoinpayments017")
}else{
return}
