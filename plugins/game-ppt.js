//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Select piedra/papel/tijera\n\nExample : *${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijera'
    } else {
        astro = 'papel'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Tie*\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\n🎁 Points (±)100 XP`)
    } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *REWARD* 🎊\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Lost*\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\n Points *-${poin} XP*`)
        }
    } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *REWARD* 🎊\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Lost*\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\nPoints *-${poin} XP*`)
        }
    } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Reward* 🎊\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Lost*\n\n‣ You : ${text}\n‣ Halima : ${astro}\n\nPoints *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler
