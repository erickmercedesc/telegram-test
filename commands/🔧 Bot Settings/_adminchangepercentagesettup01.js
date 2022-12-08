/*CMD
  command: /adminchangepercentagesettup01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔧 Bot Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.setProperty("PercentagePlan",message,"string")
var value = message
var quantity_1 = value.slice(0,-2)
var quantity_2 = value.replace(""+quantity_1+"","")
var percent = quantity_1+"."+quantity_2
Bot.setProperty("InvestmentPlan",percent,"string")
Bot.editMessage("✅ The Investment Percentage Of The Bot Was Updated To "+message+"%",id)
var b=[
[{title:"⬅️ Back To Settings",command:"/admininvestmentplan01"}]]
Bot.editInlineKeyboard(b,id)
}else{
return}
