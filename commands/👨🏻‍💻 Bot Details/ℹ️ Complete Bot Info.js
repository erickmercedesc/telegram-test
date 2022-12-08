/*CMD
  command: ℹ️ Complete Bot Info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨🏻‍💻 Bot Details
  answer: 
  keyboard: 
  aliases: /admincompletebotinfo01
CMD*/

let id = User.getProperty("adminmsgid")
let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let cur = Bot.getProperty("cur","⛔️ Not Set")
let mustjoin = Bot.getProperty("mustjoin","⛔️ Not Set")
let autopost = Bot.getProperty("autopost","⛔️ Not Set")
let cpprivatekey = Bot.getProperty("cp_privatekey01","⛔️ Not Set")
let cppublickey = Bot.getProperty("cp_publickey01","⛔️ Not Set")
let bbapikey = Bot.getProperty("bb_apikey01","⛔️ Not Set")
let mindepo = Bot.getProperty("adminmindepo01","⛔️ Not Set")
var maxdepo = Bot.getProperty("adminmaxdepo01","⛔️ Not Set")
let minwith = Bot.getProperty("adminminwd01","⛔️ Not Set")
let minrein = Bot.getProperty("adminmireind01","⛔️ Not Set")
let RefCom_LV1 = Bot.getProperty("RefCom_LV1","⛔️ Not Set")
let Percentage_Plan = Bot.getProperty("PercentagePlan","⛔️ Not Set")

var b = [[{text:"⬅️ Back To Sittings", callback_data:"/adminbotdetails01"}]]

let txt = "<b>» Must Join:</b> <code>"+mustjoin+"</code>\n\n<b>» Payment Channel:</b> <code>"+autopost+"</code>\n\n<b>» Currency:</b> <code>"+cur+"</code>\n\n<b>» Minimum Deposit:</b> <code>"+mindepo+" "+cur+"</code>\n\n<b>» Maximum Deposit:</b> <code>"+maxdepo+" "+cur+"</code>\n\n<b>» Minimum Reinvestment:</b> <code>"+minrein+" "+cur+"</code>\n\n<b>» Minimum Withdrawal:</b> <code>"+minwith+" "+cur+"</code>\n\n<b>» Referral Commission:</b> <code>"+RefCom_LV1+"%</code>\n\n<b>» Percentage Plan:</b> <code>"+Percentage_Plan+".00%</code>\n\n<b>» Private Key:</b> <code>"+cpprivatekey+"</code>\n\n<b>» Public Key:</b> <code>"+cppublickey+"</code>\n\n<b>» Bots.Business Key:</b> <code>"+bbapikey+"</code>"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b}})
}else{
return}
