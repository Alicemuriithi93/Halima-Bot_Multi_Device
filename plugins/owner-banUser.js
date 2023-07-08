//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Label or mention someone\n\n📌 Example : ${usedPrefix + command} @user`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
✅ BANNED

───────────
@${who.split`@`[0]} *You will no longer be able to use My Commands* `, m, { mentions: [who] })
}
handler.help = ['ban']
handler.tags = ['']
handler.command = /^ban$/i
handler.rowner = true

export default handler
