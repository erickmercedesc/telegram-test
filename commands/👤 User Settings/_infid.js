/*CMD
  command: /infid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: π€ User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin=Bot.getProperty("adminlogin")
let msgid=User.getProperty("adminmsgid")
if(chat.chatid==admin){


if(params){
var User_ID = params
var line = "*-------------------------------------------*"
var User_Info = Bot.getProperty("user_info"+User_ID)
if(!User_Info){
Api.sendMessage({chat_id:chat.chatid,text:"*βINVALID ID NUMBER.*\n_USER DID NOT FOUNDED FROM USERS LIST ON THIS BOT DATABASE._",parse_mode:"Markdown"})
return
}
let Mention_Name = User_Info.mention_name
let First_Name = User_Info.first_name
let Last_Name = User_Info.last_name
let Username = User_Info.username
let Is_Bot = User_Info.is_bot
let Now = User_Info.chat_created
let Position = User_Info.position
let Telegramid = User_Info.id

let Day = Libs.DateTimeFormat.format(Now, " dddd");
let Num = Libs.DateTimeFormat.format(Now, "dd");
let Month = Libs.DateTimeFormat.format(Now, "mmmm");
let Year = Libs.DateTimeFormat.format(Now, "yyyy");
let time = Libs.DateTimeFormat.format(Now, "h:MM:ss T");
var Date_Time = Day+" "+Num+"th "+Month+" "+Year+" - "+time+"M"
if(!Last_Name){ var l ="β No Last Name"} else { var l =""+Last_Name}
if(!Username){ var h ="β No Username"} else { var h ="@"+Username}

let lv1 = Libs.ResourcesLib.anotherUserRes("Ref_1",User_ID);
let lv2 = Libs.ResourcesLib.anotherUserRes("Ref_2",User_ID);
let lv3 = Libs.ResourcesLib.anotherUserRes("Ref_3",User_ID);
let User_Wallet = Bot.getProperty("User_Wallet"+User_ID,"β Not Set")
let User_Wallet_Deposit = Bot.getProperty("User_Wallet_Deposit"+User_ID,"β Not Set")
let g112=Bot.getProperty("banuser"+User_ID)
if(g112=="banned"){ var u23 ="βοΈ Banned"} else { var u23="β Not Banned"}
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
var b2=[[{text:"β¬οΈ Back To Sittings",callback_data:"/admingetfullinfouser01"}]]
var text = "*π¨βπ» User:* "+Mention_Name+"\n"+line+"\n*π€ First Name:* `"+First_Name+"`\n\n*π₯ Last Name:* `"+l+"`\n\n*πΉ Username:* `"+h+"`\n\n*π User ID:* `"+Telegramid+"`\n\n*πͺ Total Refferrals:*\n`1Β° Level: "+lv1.value()+" Users π₯`\n`2Β° Level: "+lv2.value()+" Users π₯`\n`3Β° Level: "+lv1.value()+" Users π₯`\n\n*π Joined Bot At:* `"+Date_Time+"`\n\n*#οΈβ£ User Position:* `"+Position+"`\n\n*π Ban Status:* `"+u23+"`\n"+line+"\n\n*πΉ User Wallet Address:* \n`"+User_Wallet+"`\n\n*π³ User Deposit Address:* \n`"+User_Wallet_Deposit+"`"
Api.sendMessage({chat_id:chat.chatid,text:text,parse_mode:"Markdown"})
}
}else{
return}


