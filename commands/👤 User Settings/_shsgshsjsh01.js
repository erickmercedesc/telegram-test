/*CMD
  command: /shsgshsjsh01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
let msgid = User.getProperty("adminmsgid")
if(chat.chatid==admin){
var User_ID = message
var line = "*-------------------------------------------*"
var User_Info = Bot.getProperty("user_info"+User_ID)
if(!User_Info){
var b=[[{text:"⬅️ Back To Sittings",callback_data:"/admingetfullinfouser01"}]]
Api.editMessageText({chat_id:chat.chatid,text:"*❕INVALID ID NUMBER.*\n_USER DID NOT FOUNDED FROM USERS LIST ON THIS BOT DATABASE._",message_id:msgid,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
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
if(!Last_Name){ var l ="❌ No Last Name"} else { var l =""+Last_Name}
if(!Username){ var h ="❌ No Username"} else { var h ="@"+Username}

let lv1 = Libs.ResourcesLib.anotherUserRes("Ref_1",User_ID);
let lv2 = Libs.ResourcesLib.anotherUserRes("Ref_2",User_ID);
let lv3 = Libs.ResourcesLib.anotherUserRes("Ref_3",User_ID);
let User_Wallet = Bot.getProperty("User_Wallet"+User_ID,"❌ Not Set")
let User_Wallet_Deposit = Bot.getProperty("User_Wallet_Deposit"+User_ID,"❌ Not Set")
let g112=Bot.getProperty("banuser"+User_ID)
if(g112=="banned"){ var u23 ="⛔️ Banned"} else { var u23="✅ Not Banned"}
Api.deleteMessage({chat_id:admin,message_id:request.message_id})
var b2=[[{text:"⬅️ Back To Sittings",callback_data:"/admingetfullinfouser01"}]]
var text = "*👨‍💻 User:* "+Mention_Name+"\n"+line+"\n*👤 First Name:* `"+First_Name+"`\n\n*👥 Last Name:* `"+l+"`\n\n*🚹 Username:* `"+h+"`\n\n*🆔 User ID:* `"+Telegramid+"`\n\n*👪 Total Refferrals:* \n`1° Level: "+lv1.value()+" Users 🥇`\n`2° Level: "+lv2.value()+" Users 🥈`\n`3° Level: "+lv3.value()+" Users 🥉`\n\n*🌐 Joined Bot At:* `"+Date_Time+"`\n\n*#️⃣ User Position:* `"+Position+"`\n\n*🔎 Ban Status:* `"+u23+"`\n\n"+line+"\n*💹 User Wallet Address:*\n`"+User_Wallet+"`\n\n*💳 User Deposit Address:* \n`"+User_Wallet_Deposit+"`"
Api.editMessageText({chat_id:chat.chatid,text:text,message_id:msgid,parse_mode:"Markdown",reply_markup:{inline_keyboard:b2}})
}else{
return}
