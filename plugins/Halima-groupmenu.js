import fetch from 'node-fetch';
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '😍', '🥰', '😘', '😗', '😋', '😛', '😜', '🤪', '😝', '🤑',
  '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏',
  '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯',
  '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '😮', '😯',
  '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭',
  '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠',
  '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻',
  '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽',
  '🙀', '😿', '😾', '👐', '🙌', '👏', '🤝', '👍', '👎', '👊',
  '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '👈', '👉',
  '👆', '👇', '☝️', '✋', '🤚', '🖐️', '🖖', '👋', '🤙', '💪',
  '🦵', '🦶', '🖕', '🙏', '🦰', '🦱', '🦲', '🦳', '🦴', '🦷',
  '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴',
  '👮', '🕵️', '👷', '💂', '👸', '👳', '👲', '🧕', '🤵', '👰',
  '🤰', '🤱', '👼', '🎅', '🤶', '🦸', '🦹', '🧙', '🧚', '🧛',
  '🧜', '🧝', '🧞', '🧟', '💆', '💇', '🚶', '🧍', '🧎', '🧑‍🦯',
  '👨‍🦯', '👩‍🦯', '🧑‍🦼', '👨‍🦼', '👩‍🦼', '🧑‍🦽', '👨‍🦽', '👩‍🦽', '🏃', '💃',
  '🕺', '🕴️', '🧖', '🧗', '🤺', '🏇', '⛷️', '🏂', '🏌️', '🏄',
  '🚣', '🏊', '⛹️', '🏋️', '🚴', '🚵', '🤸', '🤼', '🤽', '🤾',
  '🤹', '🧘', '🛀', '🛌', '🕯️', '🎖️', '🏆', '🏅', '🥇', '🥈',
  '🥉', '🎗️', '🏵️', '🎫', '🎟️', '🎪', '🤹‍♂️', '🤹‍♀️', '🎭', '🩰',
  '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸',
  '🎻', '🎲', '🧩', '🎮', '🎳', '🎯', '🎰', '🎳', '🏈', '🏀',
  '⚽', '⚾', '🥎', '🏐', '🏉', '🎾', '🥏', '🎱', '🏓', '🏸',
  '🏒', '🏑', '🥍', '🏏', '⛳', '🥊', '🥋', '🥅', '⛸️', '🎣',
  '🤿', '🎽', '🛹', '🛼', '🛶', '🎿', '🛷', '🪂', '🏹', '🎯'];
let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
  ≡ *Can only be used by the Admins of the Group* ≡

┌─⊷☾ ɢʀᴏᴜᴘ ☽︎━━◈
┃▢➥ .getbio
┃▢➥ .setpp
┃▢➥ .tagme
┃▢➥ .setwelcome <text>
┃▢➥ .add
┃▢➥ .delete
┃▢➥ .delwarn
┃▢➥ .demote
┃▢➥ .infogp
┃▢➥ .hidetag
┃▢➥ .invite
┃▢➥ .kick
┃▢➥ .link
┃▢➥ .poll
┃▢➥ .profie
┃▢➥ .promote
┃▢➥ .resetlink
┃▢➥ .setbye
┃▢➥ .group
┃▢➥ .setwelcome
┃▢➥ .simulate
┃▢➥ .staff
┃▢➥ .tagall
┃▢➥ .totag
┃▢➥ .warn
┃▢➥ .warns
┃▢➥ .checkexpired
└───────────◈\n*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*
  `;

  let pp = './src/fg_logo.jpg';
  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl);
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    m.react(randomEmoji);
 // conn.sendReadReceipt(m.chat, m.key); // Mark the message as read
 // conn.toggleDisappearingMessages(m.chat, 0); // Disable disappearing messages
  //conn.react(m.chat, m.key.id, '👨‍💻'); // React to the message with the "👨‍💻" emoji
};

handler.all = true; // Set 'all' property to true to react to every message

handler.help = ['groupmenu'];
handler.tags = ['main1'];
handler.command = ['groupmenu'];

export default handler;
