/*CMD
  command: ⤵️ Loading Menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: /loading_menu
CMD*/

var Start = User.getProperty("Start")

if(Start == undefined){
var ST_Total_Users = Libs.ResourcesLib.anotherChatRes("ST_Total_Users", "global")
  ST_Total_Users.add(1)
let h67=Bot.getProperty("bot_users")
var from9033={
first_name:user.first_name,
last_name:user.last_name,
username:user.username,
id:user.telegramid
}
if(!h67){
var pujs=[ ]
pujs.push(from9033)
Bot.setProperty("bot_users",pujs,"json")
}else{
h67.push(from9033)
Bot.setProperty("bot_users",h67,"json")
}
Bot.runCommand("/secret_main_menu")
User.setProperty("Start", "onStart", "string")
} else {
Bot.runCommand("/secret_main_menu")
}
