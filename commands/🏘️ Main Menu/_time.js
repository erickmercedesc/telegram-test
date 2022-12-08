/*CMD
  command: /time
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var now = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"})
let Day = Libs.DateTimeFormat.format(now, " dddd");
let Num = Libs.DateTimeFormat.format(now, "dd");
let Month = Libs.DateTimeFormat.format(now, "mmmm");
let Year = Libs.DateTimeFormat.format(now, "yyyy");
let time = Libs.DateTimeFormat.format(now, "h:MM:ss T");
var Date_Time =Day+" "+Num+"th "+Month+" "+Year+" - "+time+"M"

Bot.sendMessage(Date_Time)
