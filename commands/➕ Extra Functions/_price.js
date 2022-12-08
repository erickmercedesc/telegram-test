/*CMD
  command: /price
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ➕ Extra Functions
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var Currency = params.split(" ")[0]
HTTP.get({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols="+Currency+"&price_change_percentage=1h%2C24h%2C7d%2C30d",
  success: "/onPrice"
})
return
}

