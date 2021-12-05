const {
  WAConnection: _WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_MESSAGE_STUB_TYPE,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  WAMessageProto, 
  prepareMessageFromContent, 
  listMessage,
  buttonsMessage,
  relayWAMessage,
  processTime
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let master = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms");
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const colors = require('colors')
const chalk = require ("chalk")
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281515589573-1620319322@g.us"]
fakeuy = '🌹 𝐈𝐭𝐬 𝐌𝐞 𝐄𝐤𝐚 🌹'
owner = "6281515589573@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./workspace/server.js')
nocache('./workspace/server.js', module => console.log(color(`server.js is now updated!`)))

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

const starts = async (master = new WAConnection()) => {
master.version = [2, 2119, 6]
master.browserDescription = ['ItsMeEka','Safari', 'FAIII']
master.logger.level = 'warn'
console.log(color(figlet.textSync(`${spc1}Eka Bot Wa`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ • BOT Creator By Eka • ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Nama        : ${fake}`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 2.2.2`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerN}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(banner.string)
	        master.on('qr', () => {
        	console.log(color('[','white'),color('∆','red'),color(']','white'),color('scan this QR code Now...','white'),color('QR code up to','red'),color('X','lime'),color('20detik','red'))
          master.sendMessage(`6281515589573@s.whatsapp.net`, `「 *NOTIFICATION!* 」\n\n _Bot Berhasil Terhubung!_`, MessageType.extendedText)
            })

fs.existsSync('./workspace/QRnya.json') && master.loadAuthInfo('./workspace/QRnya.json')
	        master.on('connecting', () => {
	        console.log(color('[ SYSTEM ]','orange'), color('Menyambungkan...','white'))
		    start('2', "\nMenunggu Tersambung....\n  「 🌹 𝐑-𝐁𝐎𝐓 ]")
        	})
	        master.on('open', () => {
	        console.log(color('[ SYSTEM ]','orange'), color('Tersambung...','magenta'))   
	    	success('2', "Connect 100%...")
	    	console.log((color('𝑯𝑬𝑳𝑳𝑶𝑾𝑶𝑹𝑳𝑫 ','cyan')))
	    	  console.log(color('[ BOT ]','purple'), color('𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑩𝑨𝑪𝑲 ','cyan'))
  	  	    console.log(color('[ BOT ]','purple'), color('𝑰𝑵𝑭𝑶 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 : 6281515589573','cyan'))   
            console.log(color('[ BOT ]','purple'), color('𝑺𝑻𝑨𝑻𝑼𝑺 : 𝑶𝑵𝑳𝑰𝑵𝑬 ','cyan'))   
  	  	    console.log(color('[ BOT ]','purple'), color('𝑺𝑪𝑹𝑰𝑷𝑻 𝑺𝑼𝑪𝑪𝑬𝑺𝑺 𝑻𝑶 𝑹𝑼𝑵...','cyan'))   
  	      	})         
            await master.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./workspace/QRnya.json', JSON.stringify(master.base64EncodedAuthInfo(), null, '\t'))            
           forks('2',colors.bold.white("\nMenunggu Pesan Baru....\n  「 🌹 𝐑-𝐁𝐎𝐓 ]"));
           
master.on('chat-update', async (message) => {
require('./workspace/server.js')(master, message)
})

master.on('message-delete', async(message) => {
require('./lib/antidelete.js')(master, message)
})

master.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
