/*CMD
  command: /multidep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Multicurrency
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("cur")
HTTP.get({
  url: "https://api.cryptonator.com/api/ticker/"+cur+"-"+params,
  success: "/onmulti "+params
})

