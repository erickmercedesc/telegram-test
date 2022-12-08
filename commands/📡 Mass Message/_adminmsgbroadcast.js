/*CMD
  command: /adminmsgbroadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📡 Mass Message
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminlogin")
if(chat.chatid==admin){

var fullBotUsers = Bot.getProperty("bot_users")
var usrname = '<a href="tg://user?id=' + user.telegramid + '">' + user.first_name + "</a>"
if (!user.username) {
  var usrname =
    '<a href="tg://user?id=' + user.telegramid + '">' + user.first_name + "</a>"
}
//POLL
if (request.poll) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Poll Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    Api.forwardMessage({
      chat_id: User_ID,
      from_chat_id: user.telegramid,
      message_id: request.message_id
    })
  }
  return
}
//END
//VOICE
if (request.voice) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Voice Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendVoice({ chat_id: User_ID, voice: request.voice.file_id })
    }
    if (request.caption) {
      Api.sendVoice({
        chat_id: User_ID,
        voice: request.voice.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//VIDEO
if (request.video) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Video Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendVideo({ chat_id: User_ID, video: request.video.file_id })
    }
    if (request.caption) {
      Api.sendVideo({
        chat_id: User_ID,
        video: request.video.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//FILE
if (request.document) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "File Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendDocument({ chat_id: User_ID, document: request.document.file_id })
    }
    if (request.caption) {
      Api.sendDocument({
        chat_id: User_ID,
        document: request.document.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//AUDIO
if (request.audio) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Audio Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendAudio({ chat_id: User_ID, audio: request.audio.file_id })
    }
    if (request.caption) {
      Api.sendAudio({
        chat_id: User_ID,
        audio: request.audio.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//PHOTO
if (request.photo[0]) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Photo Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    if (!request.caption) {
      Api.sendPhoto({ chat_id: User_ID, photo: request.photo[0].file_id })
    }
    if (request.caption) {
      Api.sendPhoto({
        chat_id: User_ID,
        photo: request.photo[0].file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//STICKER
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Sticker Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    Api.sendSticker({ chat_id: User_ID, sticker: request.sticker.file_id })
  }
  return
}
//END
var promo = "Message"
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional"
  }
}
//ANIMATION
if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
  var User_ID = info.id
    Api.sendMessage({
      chat_id: User_ID,
      text: "Animation Transmitted By The Administrator.",
    parse_mode: "HTML"
    })
    Api.sendAnimation({ chat_id: User_ID, animation: request.animation.file_id })
  }
  return
}
//END
if (message.length > 1000) {
  Bot.sendMessage("_⚠️ This Message Cannot Be Transmitted Because It Is Too Long, The Maximum Is 1000 Characters._")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  var User_ID = info.id
  Api.sendMessage({
    chat_id: User_ID,
    text:
      promo +
      " Transmitted By The Administrator.\n<code>━━━━━━━━━━━━━━━━━</code>\n" +
      message +
      "\n<code>━━━━━━━━━━━━━━━━━</code>",
    parse_mode: "HTML"
  })
}

Api.sendMessage({
    chat_id: admin,
    text: "Broadcast By --> "+usrname+"\n🆔 --> <code>"+user.telegramid+"</code>",
    parse_mode: "HTML"
  })
}else{
return}

