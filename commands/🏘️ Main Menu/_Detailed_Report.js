/*CMD
  command: /Detailed_Report
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ๐๏ธ Main Menu

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("usermsgid")
let Aactive_RefList_Inv = Bot.getProperty("activereflistinv"+user.telegramid)
if(!Aactive_RefList_Inv){
let btn1 = [[{ text: "โฌ๏ธ Back", callback_data: "/refferral r"}]]
let text1 = "*๐ Advanced Active Referrals Report*\n_โจ Not Any Investment Found_"
Api.editMessageText({ text:text1, message_id:msgid, parse_mode:"Markdown", reply_markup: {inline_keyboard: btn1 } })
return
}
let line = "\nโข โโโโโโโโโโโโโโโโโ โข\n"
let text2 = ""+line+"*ยป ๐ Active Referrals Report ยซ*"+line+""+Aactive_RefList_Inv+""+line+""
let btn2 = [[{ text: "โฌ๏ธ Back", callback_data: "/refferral r"}]]
Api.editMessageText({ text:text2, message_id:msgid, parse_mode:"Markdown", reply_markup: {inline_keyboard: btn2 } })
