/*CMD
  command: đ Coinpayments Key
  help: 
  need_reply: 
  auto_retry_time: 
  folder: đ Coinpayments Key
  answer: 
  keyboard: 
  aliases: /admincpjeyset01
CMD*/

let admin = Bot.getProperty("adminlogin")
let id = User.getProperty("adminmsgid")
if(chat.chatid==admin){
let rt = "*â ī¸ Warning:* _Deposit will not work untill you insert this string_ ( `Secretprivateipn017` )  _to your_ [coinpayments](http://www.coinpayments.net) _ipn Settings_"
let cp_privatekey = Bot.getProperty("cp_privatekey01","đ Not Set")
let cp_publickey = Bot.getProperty("cp_publickey01","đ Not Set")
let line="*------------------------------------------------*"
let text = "*Here is your currently setupped* [Coinpayments](http://www.coinpayments.net) *Public and Private Keys*\n"+line+"\n"+"\n*Public Key:* `"+cp_publickey+"`\n\n*Private Key:* `"+cp_privatekey+"`"+"\n\n"+rt
var b=[
[{text:"đ Change Coinpayments Key", callback_data:"/changekeyforcommandcpkeys01"}],
[{text:"đĩ Coinpayment Balance", callback_data:"/cpbal01 r"}],
[{text:"Return âŠī¸", callback_data:"/adminmainsettings01"}, {text:"âŦī¸ Back To Settings", callback_data:"/secretpanel r"}]]

Api.editMessageText({chat_id: chat.chatid, message_id: id,text: text, parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
}else{
return}
