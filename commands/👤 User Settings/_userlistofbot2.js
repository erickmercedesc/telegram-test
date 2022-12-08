/*CMD
  command: /userlistofbot2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👤 User Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

var line="<b>-----------------------------------------------</b>"
let id=User.getProperty("adminmsgid")
let admin=Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let refList=Bot.getProperty("bot_users")
if(params){
let array=params.split(' ')
let type=array[0]
let f_1=array[2]*1
let f_next=array[1]*1
let f=array[3]*1

if(type=="mkb"){
let f_2=f_1+f
let f_s_n=f_next+1
let prev=f_1-f
let prev2=f_next-1
let f_u=f+f_1

var star=refList.slice(f_1,f_1+10)
let dete=f_1+10

if(f_next=="1") {
Bot.runCommand("/adminuserlist01")
return
}else{
if(refList.length>dete){
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistofbot2"+" "+"mkb"+" "+(f_next-1)+" "+(f_1-10)+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/adminuserlist01"}, {text:"Next ➡️", callback_data:"/userlistofbot2"+" "+"mkb"+" "+f_s_n+" "+(f_1+10)+" "+f}],
[{text:"⬅️ Back To Settings",callback_data:"/adminusersettings01"}]]
}else{
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistofbot2"+" "+"mkb"+" "+prev2+" "+prev+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/adminuserlist01"}],
[{text:"⬅️ Back To Settings",callback_data:"/adminusersettings01"}]]
}
}

if(refList.length>0){
  var msg5 = "<b>Total users:</b> " + refList.length + "\n"+line;
  for(var x in star){
    var user2= star[x];
var count=(x*1)+(f_1*1)+1
let valu=(f_1*1)+10
if(count==valu){
var nio="└"
}else{
var nio="├"
}
msg5+= "\n<b>"+count+"</b> "+nio+" <code>"+user2.id+"</code>"+" "+'<a href="'+'t.me/'+bot.name+'?start=userinfo_'+user2.id+'">'+'INFO'+'</a>'+" | "+'<a href="'+'tg://user?id='+user2.id+'">'+user2.first_name+'</a>';
  }
}else{
  var msg5 = "No Userd Found";
}
Api.editMessageText({chat_id: chat.chatid, message_id: id, parse_mode:"html",text: msg5,reply_markup:{inline_keyboard:b2}})
}
}
}else{
return
}
