/*CMD
  command: /onMultiWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = params
let wallet = options.result.address;
Bot.setProperty("User_Wallet_Deposit"+user.telegramid+"_"+cur, wallet ,"string")
Bot.runCommand("/multidep "+params);
