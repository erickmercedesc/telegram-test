/*CMD
  command: /adminremovebalance02
  help: 
  need_reply: true
  auto_retry_time: 
  folder: š¤ User Settings
  answer: *ā”ļø Send The Amount You Want To Cut From The User's Balance.*
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){
let amount = parseFloat(message);
let tgid = User.getProperty("RemoveBalance");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(-amount));
Bot.sendMessage("*Succesfully Remove Balance \nš¤ User:* `"+tgid+"`\n*š° Amount:* `-"+amount+"`");
}else{
return}
