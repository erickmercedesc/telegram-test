/*CMD
  command: /setkeyforpublicincoinpauymentslib
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔒 Coinpayments Key
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let cp_pre = Bot.getProperty("cp_privatekey01")
let cp_pub = Bot.getProperty("cp_publickey01")
let x = message
if(!message){
Bot.sendMessage("!invaild *publick key* try again")
Bot.setProperty("cp_privatekey01", false,"boolean")
return
}

Bot.setProperty("bb_apikey01", message,"string")

Libs.CoinPayments.setPrivateKey(cp_pre);
Libs.CoinPayments.setPublicKey(cp_pub);
Libs.CoinPayments.setBBApiKey(message);

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*Your coinpayments key has been successfully updated*",id)

var b=[
[{title:"⬅️ Back To Settings",command:"/secretpanel r"}]]
Bot.editInlineKeyboard(b,id)
}else{
return}
