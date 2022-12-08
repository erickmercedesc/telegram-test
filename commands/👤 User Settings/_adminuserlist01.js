/*CMD
  command: /adminuserlist01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin= Bot.getProperty("adminlogin")
let id=User.getProperty("adminmsgid")
if(chat.chatid==admin){
let refList=Bot.getProperty("bot_users")
var line="<b>-----------------------------------------------</b>"
let f=10
var json=Bot.getProperty("user_info")
let k_1=refList.slice(0,f)
if(refList.length>f){
let an_2=f+f
var bu=[[{text:"Page: [1]",callback_data:"/userlistofbot"},{text:"Next ➡️",callback_data:"/userlistofbot2"+" "+"mkb"+" "+"2"+" "+f+" "+f}],
[{text:"🔚Back To Settings",callback_data:"/adminusersettings01"}]]
}else{
var bu=[[{text:"🔚Back To Settings",callback_data:"/adminusersettings01"}]] 
}
let msg;
var arr=json
if(refList.length>0){
  msg = "<b>👥 Total Users:</b> " + refList.length + "\n"+line;
  for(var i in k_1){
    var user = k_1[i];
var count=(i*1)+1
if(count<10){
 var gh="0"+count
}else{
var gh=count
}

if(count==10){
var ghk="└"
}else{
var ghk="├"
}
    msg+= "\n<b>"+gh+"</b> "+ghk+" <code>"+user.id+"</code>"+" "+'<a href="'+'t.me/'+bot.name+'?start=userinfo_'+user.id+'">'+'INFO'+'</a>'+" | "+'<a href="'+'tg://user?id='+user.id+'">'+user.first_name+'</a>';
  }
}else{
  msg = "No Userd Found";
}
Api.editMessageText({chat_id: chat.chatid, message_id: id, parse_mode:"html",text: msg,reply_markup:{inline_keyboard:bu}})
}else{
return
}
