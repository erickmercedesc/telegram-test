/*CMD
  command: 📞 Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var text = "*📞 You Are Now In Direct Contact With Our Administrator.*\nSend Here Any Message You Want To Submit, You Will Receive The Answer Directly Here In Chat!"

User.setProperty("is_support_admin",true,"boolean")
Bot.sendKeyboard("⬅️ Return",text)
