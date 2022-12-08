/*CMD
  command: /onWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📥 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result.address;
Bot.setProperty("User_Wallet_Deposit"+user.telegramid, wallet ,"string")
Bot.runCommand("/deposit");
