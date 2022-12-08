/*CMD
  command: 📡 Rules
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏘️ Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

let line = "\n• ━━━━━━━━━━━━━━━━━━━━━━ •\n"
let Space = "            "
var text = ""+line+""+Space+"<b><u>🛑 PROJECT RULES 🛑</u></b>"+line+"<i> 1️⃣ The Use Of Multi-Accounts Will Be Prohibited By Creating Three Referral Scales To Generate Greater Profits, Any Person Detected Carrying Out This Type Of Activity Will Be Eliminated From The Bot And Will Automatically Lose Their Investment.\n\n 2️⃣ I Do Not Know They Will Allow Offenses, Insults, Discrimination Or Something Like That Towards A Member Of The Project.\n\n 3️⃣ User Inquiries Will Be Sent And Attended To In The Group.</i>"+line+""
Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true })
