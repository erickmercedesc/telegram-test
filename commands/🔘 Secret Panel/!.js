/*CMD
  command: !
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔘 Secret Panel

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let Admin_Support = Bot.getProperty("Admin_Support","⛔ No Set")
Bot.sendMessage("*😢 Sorry, Apparently There Was An Error In The Bot Code.*\n\n_🗣️ You Can Report This Bug To Our Administrator @"+Admin_Support+" To Solve It As Soon As Possible..._")
