import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['254798708444', 'Abdul ❤️🫶', true],
 // ['5492622271736'], 
 // ['5492622271736'] 
] //Numeros de owner 

global.mods = ['254798708444'] 
global.prems = ['254798708444']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': '𝐀𝐛𝐝𝐮𝐥𝐫𝐚𝐡𝐦𝐚𝐧'
}

// Sticker WM
global.packname = 'Halimaᴮᴼᵀ' 
global.author = '𝐇𝐚𝐥𝐢𝐦𝐚' 
global.fgig = '▢ Follow me on Instagram\nhttps://www.instagram.com/noo.i.e\n' 
global.dygp = 'https://chat.whatsapp.com/IfcVaQFsS8UCTkSEugeSt2'
global.fgsc = 'https://github.com/x-poison' 
global.fgyt = 'https://youtube.com/@poisonmods'
//global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/EJgRBnS.jpg' 

global.wait = '*⌛ _loading..._*\n*▰▰▰▰▰▰▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
