//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Tag the user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Enter the amount of *XP* you want to add'
  if (isNaN(txt)) throw ' 🔢 numbers only'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ Minimum  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XP ADD*
┌──────────────
▢  *Total:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Got \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['add_xp']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

