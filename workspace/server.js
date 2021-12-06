//Created by Its Me EkaXAdelia
//***REQUIRE MODULE***///
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const yo = require("tod-api");
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
const fs = require('fs')
const util = require('util')
const qrcode = require('qrcode');
const imgbb = require('imgbb-uploader')
const request = require('request')
const requests = require("node-fetch")
const toMs = require('ms')
const ms = require("parse-ms");
const FormData = require('form-data')
const yts = require( 'yt-search')
const axios = require("axios")
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const brainly = require("brainly-scraper");
const ffmpeg = require('fluent-ffmpeg')
const { exec } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//***STICKER WM***//
const Exif = require('../lib/exif');
const exif = new Exif();

//***LIBRARY***//
const { color, bgcolor } = require('../lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, fetchText, kyun } = require('../lib/fetcher')
const { recognize } = require('../lib/ocr')
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('../lib/ezgif')
const { yta, ytv, ytv2, upload } = require('../lib/ytdl')
const { smsg } = require('../lib/simple')
const { speedz } = require('../lib/speedz')

//***DATABASE***//
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
//***SETTING***//
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
public = false
antitag = false
autongetik = false
autovn = false
autoreadgc = false
autoreadpc = false
bugc = true
antitrol = false
ownerN = "6281515589573"
setgrup = "6281515589573-1620319322@g.us"
fakeNumber = '0@s.whatsapp.net'
blocked = []
shp  = '🔰'
shp2 = '🪐'
shp3 = '🕛'
shp4 = '🗓'
shp5 = '🌹'
scs  = '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'
nama = 'R-BOT'
fake = 'R-BOT'
harga = '99999999999'
settroli = '2021'
cokmatane = '359996400'
harganya = '99999999999'
long = '106.8451'
lati = '-6.2146'
gamewaktu = '60'
matauang = 'Rp.'
blocked = []
ban = []
adadeh = {}

//***PREFIX***//
let multi  = true
let nopref = false
let single = false
let prefa  = '#'

// APIKEY
HunterApi = 'Ikyy69'
xchillds = 'XChillDs'
lolkey = '78bd89cd7b4d6205e3e18061'

//***FAKE IMAGE***//
fakeimg1 = fs.readFileSync(`./workspace/media/img1.jpeg`);
fakeimg2 = fs.readFileSync(`./workspace/media/img2.jpeg`);
fakeimg3 = fs.readFileSync(`./workspace/media/img3.jpeg`);
fakeimg4 = fs.readFileSync(`./workspace/media/img4.jpeg`);
/***
INFORMATION :
# img1 = Image Quoted
# img2 = Image Thumbnail
# img3 = Image Menu
# img4 = Image Flink
***/

//***VCARD***//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:My Owner シ︎\n'
            + 'ORG:Owner Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281515589573:+62 815-1558-9573\n'
            + 'END:VCARD'
            
            
//***FUNCTION BEFORE MODULE EXPORTS***//
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
          
//***START CONNECTION***//
module.exports = master = async (master, god) => {
try {
if (!god.hasNewMessage) return
god = god.messages.all()[0]
if (!god.message) return
if (god.key && god.key.remoteJid == 'status@broadcast') return
god.message = (Object.keys(god.message)[0] === 'ephemeralMessage') ? god.message.ephemeralMessage.message : god.message

m = smsg(master, god)
global.prefix
global.blocked

const content = JSON.stringify(god.message)
const from = god.key.remoteJid
const type = Object.keys(god.message)[0]

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const mentionByTag = type == "extendedTextMessage" && god.message.extendedTextMessage.contextInfo != null ? god.message.extendedTextMessage.contextInfo.mentionedJid : []

master.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await master.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await master.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ *${mdata.subject}* ]\n═══════════════════\n@${num.split('@')[0]} ɪɴᴛʀᴏ ᴅᴜʟᴜ!!!\n═══════════════════\nᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴍᴀᴜ ɪɴᴛʀᴏ sɪʟᴀʜᴋᴀɴ ᴋᴇʟᴜᴀʀ ɴɢᴀʙ\n═══════════════════\n✤ ɴᴀᴍᴀ :\n✤ ᴜᴍᴜʀ :\n✤ ɢᴇɴᴅᴇʀ :\n✤ ᴀsᴀʟ ᴋᴏᴛᴀ :\n✤ ɴᴀᴍᴀ ɪɢ :\n✤ ᴀᴅᴀ ᴅᴏɪ? :\n✤ ɴᴀᴍᴀ ᴍᴀɴᴛᴀɴ? :\n═══════════════════\nɴᴏᴛᴇ : sᴀᴠᴇ ɴᴏᴍᴇʀ ʙᴏᴛ & ᴀᴅᴍɪɴ\nsᴇᴍᴏɢᴀ ʙᴇᴛᴀʜ ᴅᴀɴ sɪʟᴀʜᴋᴀɴ ᴋᴇʟᴜᴀʀ :ᴠ`
				let buff = await getBuffer(ppimg)
				master.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await master.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `sᴀʏᴏɴᴀʀᴀ sᴇᴍᴏɢᴀ ᴛᴇɴᴀɴɢ ᴅɪ ᴀʟᴀᴍ sᴀɴᴀ ᴅᴀɴ ᴊᴀsᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ʙᴜᴀɴɢ sᴀᴊᴀ@${num.split('@')[0]} 👋`
				let buff = await getBuffer(ppimg)
				master.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
	}
})

//***DATE & TIME***//
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const datenya = new Date().toLocaleDateString()
const jamm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const timewib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const timewita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const timewit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
let dt = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing','Pon','Wage','Kliwon','Legi'][Math.floor(((dt * 1) + gmt) / 84600000) % 5]
let week = dt.toLocaleDateString(locale, { weekday: 'long' })
let calender = dt.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
case 1: bulan1 = "Februari"; break;
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break;
}
switch(waktoo){
case 0: waktoo = "Tengah Malam 🌃"; break;
case 1: waktoo = "Dini Hari 🌃"; break;
case 2: waktoo = "Dini Hari🌃"; break;
case 3: waktoo = "Dini Hari🌃"; break;
case 4: waktoo = "Subuh🏙"; break;
case 5: waktoo = "Fajar🏙"; break;
case 6: waktoo = "Pagi🏙"; break;
case 7: waktoo = "Pagi🏙"; break;
case 8: waktoo = "Pagi🏙"; break;
case 9: waktoo = "Pagi🏙"; break;
case 10: waktoo = "Pagi🏙"; break;
case 11: waktoo = "Siang🌇"; break;
case 12: waktoo = "Dzuhur🌇"; break;
case 13: waktoo = "Siang🌇"; break;
case 14: waktoo = "Siang🌇"; break;
case 15: waktoo = "Ashar🌆"; break;
case 16: waktoo = "Sore🌆"; break;
case 17: waktoo = "Sore🌆"; break;
case 18: waktoo = "Magrib🌆"; break;
case 19: waktoo = "Isya🌃"; break;
case 20: waktoo = "Malam🌃"; break;
case 21: waktoo = "Malam🌃"; break;
case 22: waktoo = "Malam🌃"; break;
case 23: waktoo = "Malam🌃"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var Hari= "" + waktoo;


const mentionByReply = type == "extendedTextMessage" && god.message.extendedTextMessage.contextInfo != null ? god.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const cmd = (type === 'conversation' && god.message.conversation) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text ? god.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()


//***PREFIX***//
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa
}
}
}


body = (type === 'conversation' && god.message.conversation.startsWith(prefix)) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption.startsWith(prefix) ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption.startsWith(prefix) ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text.startsWith(prefix) ? god.message.extendedTextMessage.text : (type == "stickerMessage") && stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text ? prefix + stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text : (type === 'buttonsResponseMessage') ? god.message.buttonsResponseMessage.selectedButtonId : ""

var pes = (type === 'conversation' && god.message.conversation) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text ? god.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim()
budy = (type === 'conversation') ? god.message.conversation : (type === 'extendedTextMessage') ? god.message.extendedTextMessage.text : ''

const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
chats = (type === 'conversation') ? god.message.conversation : (type === 'extendedTextMessage') ? god.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const argss = body.split(/ +/g)

mess = {
				wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
				success: '[ √ ] 𝑺𝒖𝒄𝒄𝒆𝒔𝒔...',
        prem: `_Maaf Fitur Ini Khusus User Premium, Silahkan Hubungi Owner Untuk Menjadi User Premium!_`,
				error: {
					stick: 'Error su :v',
					Iv: 'Link nya mokad :v',
					api: '_Error!_'
				},
				only: {
					group: '*Pakainya Only Group Mhank!*',
					ownerB: '_Lu Siapa?_',
					admin: '*Lu Bukan Admin, Jadi Gausah Nyuruh Gua Su!*',
					Badmin: '*Gabisa cokk!! Jadiin gua admin dulu..*'
				}
			}

const totalchat = await master.chats.all()
const botNumber = master.user.jid
const botN = botNumber.replace('@s.whatsapp.net', '')
const ownerNumber = [`${ownerN}@s.whatsapp.net`] 
const ownerContact = [`6281515589573`,`0`]
const isGroup = from.endsWith('@g.us')
const sender = god.key.fromMe ? master.user.jid : isGroup ? god.participant : god.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await master.groupMetadata(from) : ''
const isOwner = ownerNumber.includes(sender)
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const itsMe = god.key.fromMe ? true : false
const q = args.join(' ')  
conts = god.key.fromMe ? master.user.jid : master.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = god.key.fromMe ? master.user.name : conts.notify || conts.vname || conts.name || '-'
const isBanchat = isGroup ? bancht.includes(from) : false

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

//***FAKE REPLY***//
finvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": setgrup,
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": groupName,
"caption": `${fake}`,
"height": 6080,
"width": 6000
}
}
}

const ftroli =  {
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
orderMessage: {
itemCount: `2021`,
status: 200,
thumbnail: fakeimg1, 
surface: 200, 
message: `${fake}`, 
orderTitle: '', 
sellerJid: '0@s.whatsapp.net'}
}
}

//***FUNCTION***//
function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

const replyWithFake = (teks) => {
master.sendMessage(from, teks, text,{quoted : ftroli})
}
const katalog = (teks) => {
res = master.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 2021, "message": fake, "footerText": "*_© ekadanuarta_*", "thumbnail": fakeimg1, "surface": 'CATALOG' }}, {quoted:ftroli})
master.relayWAMessage(res)
}
const reply = (teks) => {
master.sendMessage(from, teks, text, {quoted: god})
}
const sendMess = (hehe, teks) => {
master.sendMessage(hehe, teks, text,{contextInfo: { forwardingScore: 9999, isForwarded: true},thumbnail:fakeimg2})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? master.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : master.sendMessage(from, teks.trim(), extendedText, {quoted: god,thumbnail:fakeimg2, contextInfo: {"mentionedJid": memberr}})
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
master.sendMessage(to, media, type, { quoted: god, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
fs.unlinkSync(filename)
});
}

idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await master.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./workspace/media/img2.jpeg')
		const sekarang = new Date().getTime();
		
 const uploadImages = (buffData, type) => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async (resolve, reject) => {
const { ext } = await fromBuffer(buffData)
const cmd = text.toLowerCase()
const filePath = 'utils/tmp.' + ext
const _buffData = type ? await resizeImage(buffData, false) : buffData
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
if (err) return reject(err)
console.log('Uploading image to telegra.ph server...')
const fileData = fs.readFileSync(filePath)
const form = new FormData()
form.append('file', fileData, 'tmp.' + ext)
fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.then(() => fs.unlinkSync(filePath))
.catch(err => reject(err))
})
})
}

		const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('../lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					master.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
master.sendMessage(from, media, sticker, {quoted: god})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...')) 
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}


//***SELF/PUBLIC***//
if (!public){
if (!isOwner && !itsMe) return
}

const atibot = god.isBaileys
if (atibot === true) return
		
if (isBanchat){
if (!itsMe && !isOwner) return
}

//***ADD FUNCTION IN HERE***//
function _0x6f1b(){const _0x971857=['21570nuHNIJ','2132523bIQVgk','10454220wRZivw','4622816qzqCLL','1ncOIlP','9485037JDhDau','1791938bhxnpp','357exLwEq','8RNTcrB','370510ZeagTa','ephemeralMessage','message'];_0x6f1b=function(){return _0x971857;};return _0x6f1b();}(function(_0x2d2ea8,_0x594fed){const _0x4a8a09=_0x1ce7,_0x50eb90=_0x2d2ea8();while(!![]){try{const _0x50333c=parseInt(_0x4a8a09(0x191))/0x1*(-parseInt(_0x4a8a09(0x193))/0x2)+parseInt(_0x4a8a09(0x18e))/0x3+parseInt(_0x4a8a09(0x190))/0x4+-parseInt(_0x4a8a09(0x196))/0x5+parseInt(_0x4a8a09(0x18d))/0x6*(-parseInt(_0x4a8a09(0x194))/0x7)+parseInt(_0x4a8a09(0x195))/0x8*(parseInt(_0x4a8a09(0x192))/0x9)+-parseInt(_0x4a8a09(0x18f))/0xa;if(_0x50333c===_0x594fed)break;else _0x50eb90['push'](_0x50eb90['shift']());}catch(_0x4121f6){_0x50eb90['push'](_0x50eb90['shift']());}}}(_0x6f1b,0xb02c0));function _0x1ce7(_0x3e0e8b,_0x4f3b67){const _0x6f1b63=_0x6f1b();return _0x1ce7=function(_0x1ce79a,_0x4fd2e2){_0x1ce79a=_0x1ce79a-0x18d;let _0x5bea78=_0x6f1b63[_0x1ce79a];return _0x5bea78;},_0x1ce7(_0x3e0e8b,_0x4f3b67);}const bypasseph=async _0x2eef43=>{const _0x177c7d=_0x1ce7;return _0x2eef43[_0x177c7d(0x198)]=Object['keys'](_0x2eef43[_0x177c7d(0x198)])[0x0]===_0x177c7d(0x197)?_0x2eef43['message'][_0x177c7d(0x197)][_0x177c7d(0x198)]:_0x2eef43[_0x177c7d(0x198)],_0x2eef43[_0x177c7d(0x198)];};

if(itsMe){
tag = master.user.jid.split('@')[0]
mjid = master.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}

const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
const sotoyy= [
        'X : X : X',
        'X : O : X',
        'O : X : X',
        'O : O : X',
        'X : X : O',
        'O : O : O Win 👑',
        'O : X : O',
        'O : O : O Win👑'
        ]
        
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isStickers = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
 const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')


if (!isGroup && isCmd) console.log(color('[•]', 'aqua'), time, color(command , 'white'), 'from', color(sender.split('@')[0] , 'white'),'args :', color(args.length , 'white'))
if (isCmd && isGroup) console.log(color('[•]', 'aqua'), time, color(command , 'white'), 'from', color(sender.split('@')[0] , 'white'), 'in', color(groupName),'args :', color(args.length , 'white'))


let authorname = master.contacts[from] != undefined ? master.contacts[from].vname || master.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = pushname }	
			
function addMetadata(packname, author) {	
if (!packname) packname = 'saya-eka'; if (!author) author = 'Beta';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
	"sticker-pack-name": packname,
	"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	return `./sticker/${name}.exif`	
})	
}

//***MENUNYA***//
uptime = process.uptime()
eka = "6281515589573@s.whatsapp.net"
menu1 = `     
┌───「${shp5} R-BOT ${shp5}」
│✯
├ Creator : @${eka.split('@')[0]} 
├ Hari : ${week} ${weton} 
├ Jam : ${jamm} 
├ Kalender :${Tanggal} 
├ Mode : ${public ? 'publik' : 'self'} 
├ Server : Baileys
├ Browser : Safari
├ Version : 5.0
├ Ver : Heroku
├ Jumlah Fitur : 185
├ Runtime : ${kyun(uptime)}
├ Device : Dandelion
├ O.S : Android 10
├ Ram : 1906 Mib / 2782 Mib
├ CPU : MT6762G
├ Kernel : armv8l Linux 4.9.190-
├ Baseband : unknown
├ Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'} 
│✯
├─── 「WAKTU INDONESIA」
│✯
├ ${shp3} WIB : ${timewib} ${shp3}
├ ${shp3} WIT : ${timewit} ${shp3}
├ ${shp3} WITA :${timewita} ${shp3}
│✯
├───「${shp5} OWNER  MENU ${shp5}」
│✯
├ ${shp} ${prefix}speedtest
├ ${shp} ${prefix}self
├ ${shp} ${prefix}public
├ ${shp} ${prefix}setprefix 「 singlepref/nopref/multipref 」
├ ${shp} ${prefix}banchat
├ ${shp} ${prefix}shutdown
├ ${shp} ${prefix}unbanchat
├ ${shp} ${prefix}addcmd 「 reply sticker 」
├ ${shp} ${prefix}delcmd 「 reply sticker 」
├ ${shp} ${prefix}antidelete 「 on/off 」
│✯
├───「${shp5} GROUP MENU ${shp5}」
│✯
├ ${shp} ${prefix}notif 「 teks 」
├ ${shp} ${prefix}hidetag 「teks」
├ ${shp} ${prefix}imgtag 「 reply img 」
├ ${shp} ${prefix}promote 「tag target」
├ ${shp} ${prefix}demote 「tag target」
├ ${shp} ${prefix}leave
├ ${shp} ${prefix}setdeskgc 「teks」
├ ${shp} ${prefix}setnamegc 「teks」
├ ${shp} ${prefix}promoteall
├ ${shp} ${prefix}demoteall
├ ${shp} ${prefix}spam 「teks」
├ ${shp} ${prefix}creategrup 「 tag target|nama 」
├ ${shp} ${prefix}closegc
├ ${shp} ${prefix}opengc
├ ${shp} ${prefix}tagall
├ ${shp} ${prefix}linkgrup
├ ${shp} ${prefix}resetlinkgc
├ ${shp} ${prefix}add 「nomor target」
├ ${shp} ${prefix}tagme
├ ${shp} ${prefix}listadmin
├ ${shp} ${prefix}tag
├ ${shp} ${prefix}getpict
├ ${shp} ${prefix}hacked 「nama」
├ ${shp} ${prefix}sticktag 「raply stiker」
│✯
├───「${shp5} ASUPAN MENU ${shp5}」
│✯
├ ${shp} ${prefix}ghea
├ ${shp} ${prefix}rikagusriani
├ ${shp} ${prefix}ukhti
├ ${shp} ${prefix}bocil
├ ${shp} ${prefix}+62
│✯
├───「${shp5} OTHER & FUN MENU ${shp5}」
│✯
├ ${shp} ${prefix}memeindo
├ ${shp} ${prefix}quotes
├ ${shp} ${prefix}cerpen
├ ${shp} ${prefix}couple
├ ${shp} ${prefix}darkjoke
├ ${shp} ${prefix}gay 「 tag target 」
├ ${shp} ${prefix}artinama 「 nama 」
├ ${shp} ${prefix}listcmd
├ ${shp} ${prefix}asmaulhusna
├ ${shp} ${prefix}ping
├ ${shp} ${prefix}runtime
├ ${shp} ${prefix}kataeka
├ ${shp} ${prefix}motivasi
├ ${shp} ${prefix}kehidupan
├ ${shp} ${prefix}islami
├ ${shp} ${prefix}nasehat
├ ${shp} ${prefix}emoji 
├ ${shp} ${prefix}slot
├ ${shp} ${prefix}xox
├ ${shp} ${prefix}ttt
├ ${shp} ${prefix}delttt
├ ${shp} ${prefix}truth
├ ${shp} ${prefix}dare
├ ${shp} ${prefix}stiker
├ ${shp} ${prefix}toimg
├ ${shp} ${prefix}pantun
├ ${shp} ${prefix}jadian
├ ${shp} ${prefix}bass
├ ${shp} ${prefix}balik
├ ${shp} ${prefix}gemuk
├ ${shp} ${prefix}robot
│✯
├───「${shp5} SEARCH & INFO MENU ${shp5}」
│✯
├ ${shp} ${prefix}komiku-search 「 judul 」
├ ${shp} ${prefix}mangaku-search 「 judul 」
├ ${shp} ${prefix}klikmanga-search 「 judul 」
├ ${shp} ${prefix}animeplanet-search 「 judul 」
├ ${shp} ${prefix}layarkaca-search 「 judul 」
├ ${shp} ${prefix}palingmurah-search 「 judul 」
├ ${shp} ${prefix}komikfox-search 「 judul 」
├ ${shp} ${prefix}komikstation-search 「 judul 」
├ ${shp} ${prefix}kiryuu-search 「 judul 」
├ ${shp} ${prefix}kissmanga-search 「 judul 」
├ ${shp} ${prefix}aminoapps-search 「 judul 」
├ ${shp} ${prefix}mangatoon-search 「 judul 」
├ ${shp} ${prefix}wamods-search 「 judul 」
├ ${shp} ${prefix}emoji-image 「 judul 」
├ ${shp} ${prefix}coronainfo 「 negara 」
├ ${shp} ${prefix}jalantikus-meme
├ ${shp} ${prefix}merdeka-news
├ ${shp} ${prefix}kontan-news
├ ${shp} ${prefix}viva-news
├ ${shp} ${prefix}cnbcnews
├ ${shp} ${prefix}tribunnews
├ ${shp} ${prefix}indozone-news
├ ${shp} ${prefix}kumparan-news
├ ${shp} ${prefix}kompas-news
├ ${shp} ${prefix}detik-news
├ ${shp} ${prefix}daily-news
├ ${shp} ${prefix}metro-news
├ ${shp} ${prefix}inews-news
├ ${shp} ${prefix}okezone-news
├ ${shp} ${prefix}sindo-news
├ ${shp} ${prefix}tempo-news
├ ${shp} ${prefix}antara-news
├ ${shp} ${prefix}republika-news
├ ${shp} ${prefix}cnn-news
├ ${shp} ${prefix}fajar-news
├ ${shp} ${prefix}covidglobal
├ ${shp} ${prefix}ssweb 「 link / https 」
├ ${shp} ${prefix}lirik 「 judul 」
├ ${shp} ${prefix}otaku 「 judul 」
├ ${shp} ${prefix}covid 「 negara 」
├ ${shp} ${prefix}play 「 judul 」
├ ${shp} ${prefix}video 「 judul 」
├ ${shp} ${prefix}komiku 「 judul 」
├ ${shp} ${prefix}ytmp4 「 link 」
├ ${shp} ${prefix}ytmp3 「 link 」
├ ${shp} ${prefix}ytsearch 「 judul 」
├ ${shp} ${prefix}chara 「 nama 」
├ ${shp} ${prefix}pinterest 「 judul 」
├ ${shp} ${prefix}playstore 「 judul 」
├ ${shp} ${prefix}igstory 「 username 」
├ ${shp} ${prefix}linkwa 「 judul 」
├ ${shp} ${prefix}twitter 「 link 」
├ ${shp} ${prefix}facebook 「 link 」
├ ${shp} ${prefix}instagram 「 link 」
├ ${shp} ${prefix}brainly 「 text 」
├ ${shp} ${prefix}tiktok 「 link 」
├ ${shp} ${prefix}tiktokaudio 「 link 」
├ ${shp} ${prefix}igstalk 「 link 」
├ ${shp} ${prefix} image 「 judul 」
│✯
├───「${shp5} MAKER MENU${shp5}」
│✯
├ ${shp} ${prefix}foliokiri 「 text 」
├ ${shp} ${prefix}foliokanan 「 text 」
├ ${shp} ${prefix}nuliskanan 「 text 」
├ ${shp} ${prefix}nuliskiri 「 text 」
├ ${shp} ${prefix}maker2d2 「 text 」
├ ${shp} ${prefix}maker2d3 「 text 」
├ ${shp} ${prefix}maker2d4 「 text 」
├ ${shp} ${prefix}maker3d 「 text 」
├ ${shp} ${prefix}maker3d2 「 text 」
├ ${shp} ${prefix}maker3d3 「 text 」
├ ${shp} ${prefix}maker3d4 「 text 」
├ ${shp} ${prefix}transformer 「 text 」
├ ${shp} ${prefix}googletxt 「 text 」
├ ${shp} ${prefix}battlefield 「 text 」
├ ${shp} ${prefix}coffeecup 「 text 」
├ ${shp} ${prefix}coffeecup2 「 text 」
├ ${shp} ${prefix}neon 「 text 」
├ ${shp} ${prefix}glow 「 text 」
├ ${shp} ${prefix}summer 「 text 」
├ ${shp} ${prefix}flower 「 text 」
├ ${shp} ${prefix}burn 「 text 」
├ ${shp} ${prefix}quote 「 text 」
├ ${shp} ${prefix}wooden 「 text 」
├ ${shp} ${prefix}golden 「 text 」 
│✯
├───「${shp5} RANDOM MENU ${shp5}」
│✯
├ ${shp} ${prefix}trapnime
├ ${shp} ${prefix}neko
├ ${shp} ${prefix}megumin
├ ${shp} ${prefix}blowjob
├ ${shp} ${prefix}hentai
├ ${shp} ${prefix}awoo
├ ${shp} ${prefix}bj 
├ ${shp} ${prefix}eroneko
├ ${shp} ${prefix}lesbian
├ ${shp} ${prefix}anal
├ ${shp} ${prefix}yuri
├ ${shp} ${prefix}baka
├ ${shp} ${prefix}neko2
├ ${shp} ${prefix}wallpaper
├ ${shp} ${prefix}pussy
├ ${shp} ${prefix}kitsune
├ ${shp} ${prefix}keta
├ ${shp} ${prefix}neko2
├ ${shp} ${prefix}poke
├ ${shp} ${prefix}slap
├ ${shp} ${prefix}waifu
├ ${shp} ${prefix}megumin
├ ${shp} ${prefix}shinobu
├ ${shp} ${prefix}loli
│✯
├───「${shp5} UPLOAD STORY ${shp5}」
│✯
├ ${shp} ${prefix}upswteks 「 teks 」
├ ${shp} ${prefix}upswlokasi 「 teks 」
├ ${shp} ${prefix}upswaudio 「 reply audio 」
├ ${shp} ${prefix}upswvoice 「 reply audio 」
├ ${shp} ${prefix}upswsticker 「 reply sticker 」
├ ${shp} ${prefix}upswimage 「 reply image with caption 」
├ ${shp} ${prefix}upswgif 「 reply gif with caption 」
├ ${shp} ${prefix}upswvideo 「 reply video with caption 」
│✯
├───「${shp5} THANKS TO ${shp5}」
├ Allah SWT
├ Vean
├ Fajar 
├ Dehanj1ng
├ Rival
├ Denis
├ mastergonz
├ Eka
├ Rama
├ Yogi Pw
├ Dappa 
├ All Creator Bot Whatsapp
├ Maaf Klo banyak yg error :) 
│✯
└───`

//***SWITCH COMMAND***//
switch(command) {

///OWNER ONLY///
      case 'menu':
      case 'tobi':
      case 'mengmenu':
      case 'menghelp':
		  case 'help':
			case 'h':   
      case '?':
mhan1 = await master.prepareMessage(from, {jpegThumbnail: fakeimg4 ,address: fake, name: fake }, location)
bypasseph(mhan1)
gbutsan = [
  {buttonId: 'owner', buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},
  {buttonId: 'donasi', buttonText: {displayText: '💰 DONATE'}, type: 1},
  {buttonId: 'script', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1}
]
 gbuttonan = {
locationMessage: mhan1.message.locationMessage,
    contentText: `${fake}`,
    footerText: `${menu1}`,
    buttons: gbutsan,
    headerType: 6
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{contextInfo: { mentionedJid: [eka], quoted: ftroli
}})
	break
case 'donasi':
				case 'donate':
					master.sendMessage(from, 'pulsa : _081515589573_\n dana : _088-221-400-832_\n donasi seikhlasnya aja ya ngab :), jangan terpaksa..', text, { quoted: ftroli })
					break
case 'multipref': case 'multiprefix':
if(!itsMe && !isOwner) return
multi = true
nopref = false
single = false
reply(`_Success Change Prefix To : ${command}_`)
break

case 'noprefix':
if(!itsMe && !isOwner) return
multi = false
single = false
nopref = true
reply(`_Success Change Prefix To : ${command}_`)
break

case 'singleprefix':
if(!itsMe && !isOwner) return
multi = false
nopref = false
single = true
reply(`_Success Change Prefix To : ${command}_`)
break

case 'setprefix':
if(!itsMe && !isOwner) return
if(!q)return
multi = false
single = true
nopref = false
prefa = `${q}`
reply(`_Success Change Prefix To : ${q}_`)
break

case 'self':
if (!itsMe && !isOwner) return
public = false
seff = `𝐂𝐡𝐚𝐧𝐠𝐞 𝐁𝐨𝐭 𝐌𝐨𝐝𝐞 𝐓𝐨 : 𝐒𝐞𝐥𝐟`
reply(seff)
break
case 'exif':
                    if(!itsMe && !isOwner) return
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
case 'public':
if (!itsMe && !isOwner) return reply
public = true
pubb = `𝐂𝐡𝐚𝐧𝐠𝐞 𝐁𝐨𝐭 𝐌𝐨𝐝𝐞 𝐓𝐨 : 𝐏𝐮𝐛𝐥𝐢𝐜`
reply(pubb)
break

case 'status':
const status = public ? '𝑷𝑼𝑩𝑳𝑰𝑪': '𝑺𝑬𝑳𝑭'
statuy = `*「 𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓 」*\n\n${shp} 𝐌𝐎𝐃𝐄 : ${status}`
reply(statuy)
break

case 'banchat':
case 'mute':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner) return
if (isBanchat) return reply(`_Already Ban Chat In This Group!_`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Ban Chat In This Group!_`)
break

case 'unbanchat':
case 'unmute':
if (isBanchat){
if (!itsMe && !isOwner) return
if (!isBanchat) return reply(`_Already Unban Chat In This Group!_`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Unban Chat In This Group!_`)
}
break

case 'listbanchat': case 'listmute':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await master.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Group Name : ' + met.subject + '\n\n'
}
reply(teks)
break

//***ADD CMD***//
case 'addcmd':
if(!itsMe && !isOwner) return
if (!q) return reply(`Example : ${prefix + command} ping`)
const addSticker = async (name, command, _dir) => {
    _dir[name] = {text: command}
    fs.writeFileSync('./database/stickerdb.json', JSON.stringify(_dir))
    console.log(color("ADD STICKER :"+command, "yellow"))
}
  adcm = await m.quoted.fileSha256.toString('hex')
  addSticker(adcm, q, stickerdb)
	reply(`_Sukses Menambahkan Sticker Command : ${q}_`)
	break
	
case 'delcmd':
if(!itsMe && !isOwner) return
const delCommand = (name, _dir) => {
   delete _dir[name]
   fs.writeFileSync('./database/stickerdb.json', JSON.stringify(_dir))
   console.log(color("add "+name, "yellow"))
    
}
  adcm = await m.quoted.fileSha256.toString('hex')
  delCommand(adcm, stickerdb)
	reply(`_Sukses Menghapus Dari Database_`)
	break
	
case 'listcmd':
if(!itsMe && !isOwner) return
const listCommand = async (_dir, reply) => {
    let itung = 1
    let cpt = `${shp} *COMMAND STICKER* ${shp}\n\n`
     for (x in _dir) {
     cpt += `${shp} _No ${itung++}._\n_Command :_ ${_dir[x].text}\n_IdSticker :_ ${x}\n\n`
        }
    reply(cpt)
}
  listCommand(stickerdb, reply)
  break
 //****dehanj1ng****//
                           case 'fajar-news':
							FajarNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case "quotes":
							var res = await Quotes()
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += `\nAuthor: ${res.author}\n`
							teks += `\nQuotes:\n`
							teks += `${res.quotes}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							master.reply(from, teks, god)
							break
						case "cerpen":
						  var res = await Cerpen()
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nCerpen:\n\n"
							teks += res + "\n"
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							master.reply(from, teks, god)
							break
						case "couple":
							var res = await Couples()
							female = await getBuffer(res.female)
							male = await getBuffer(res.male)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nMale & Female\n"
							teks += "Couple Wallpaper\n"
							teks += `Male Source: ${res.male}\n`
							teks += `\nFemale Source: ${res.female}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							male = await master.sendMessage(from, male, god, teks)
							master.sendMessage(from, female, male, teks)
							break
						case "darkjoke":
							var res = await Darkjokes()
							buff = await getBuffer(res)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nDarkjokes?\n"
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							master.sendMessage(from, buff, image, { quoted : god, caption: teks })
							break
							case 'komiku-search':
						if (!q) return master.reply(from, 'Search?', god);
							KomikuSearch(q).then(async(res)=> {
								buff = await getBuffer(res[0].manga_thumb);
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•";
								teks += `\nManga: ${res[0].manga}\n`;
								teks += `Description: ${res[0].manga_desc}\n`;
								teks += `Chapter Pertama: ${res[0].chapter.pertama}\n`;
								teks += `Chapter Terbaru: ${res[0].chapter.terbaru}\n`;
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•";
								master.sendMessage(from, buff, god, teks);
							});
							break;
					case 'mangaku-search':
						if (!q) return master.reply(from, 'Search?', god)
							MangakuSearch(q).then(async(res) => {
								buff = await getBuffer(res[0].manga_thumb)
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								teks += `\nManga: ${res[0].manga_name}\n`
								teks += `Manga Eps: ${res[0].manga_eps}\n`
								teks += `Manga Rating: ${res[0].manga_rating}\n`
								teks += `•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•`
								master.sendMessage(from, buff, god, teks)
							})
							break
					case 'klikmanga-search':
						if (!q) return master.reply(from, 'Search?', god)
							KlikMangaSearch(q).then(async(res) => {
							no = 0
							for (let i of res) {
								no += 1
								buff = await getBuffer(i.manga_thumb)
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								teks += `\n• Urutan: ${no.toString()} •\n`
								teks += `Manga: ${i.manga_name}\n`
								teks += `Description: ${i.manga_desc}\n`
								teks += `Statues: ${i.manga_status}\n`
								teks += `Release: ${i.manga_release}\n`
								teks += `Genre's: ${i.manga_genre}\n`
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							}
							})
							break
					case 'cnn-news':
						CNNNews().then(res => {
							no = 0
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							for (let i of res) {
								no += 1
								teks += `\n• ${no.toString()} •\n`
								teks += `Berita: ${i.berita}\n`
								teks += `Link: ${i.berita_url}\n`
							}
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							master.reply(from, teks, god)
						})
						break
						case 'layarkaca-search':
							if (!q) return master.reply(from, "Film?", god)
							LayarKaca21(q).then(async(res) => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
								  no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Film: ${i.film_title}\n`
									teks += `Link: ${i.film_link}\n`
								}
								teks += `•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•`
								master.reply(from, teks, god)
							})
							break
						case 'palingmurah-search':
							if (!q) return master.reply(from, 'vps?, rdp?', god)
							PalingMurah(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.product_image)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• ${no.toString()} •\n`
									teks += `Product: ${i.product}\n`
									teks += `Description: ${i.product_desc}\n`
									teks += `Price: ${i.price}\n`
									teks += `Link: ${i.product_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									await master.sendMessage(from, buff, god, teks)
								}
							})
							break
						case 'cnbc-news':
							CNBCNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'tribun-news':
							TribunNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'indozone-news':
							IndozoneNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'kumparan-news':
							KumparanNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'kompas-news':
							KompasNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'detik-news':
							DetikNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'daily-news':
							DailyNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'metro-news':
							metroNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'inews-news':
							iNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'okezone-news':
							OkezoneNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						
						case 'sindo-news':
							SindoNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'tempo-news':
							TempoNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'antara-news':
							AntaraNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'republika-news':
							RepublikaNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.sendMessage(from, buff, god, teks)
							})
							break
						case 'animeplanet-search':
							if (!q) return master.reply(from, 'Search?', god)
							AniPlanetSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									buff = await getBuffer(i.manga_thumb)
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Link: ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									master.sendMessage(from, buff, god, teks)
								}
							})
							break
						case 'komikfox-search':
							if (!q) return master.reply(from, 'Search?', god)
							KomikFoxSearch(q).then(async(res) => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Release: ${i.manga_release}\n`
									teks += `Link: ${i.manga_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.reply(from, teks, god)
							})
							break
						case 'komikstation-search':
							if (!q) return master.reply(from, 'Search?', god)
							KomikStationSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.manga_thumb)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Chapter: ${i.manga_eps}\n`
									teks += `Link ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									master.sendMessage(from, buff, god, teks)
								}
							})
							break
						case 'kiryuu-search':
							if (!q) return master.reply(from, 'Search?', god)
							KiryuuSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.manga_thumb)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Rating: ${i.manga_rating}\n`
									teks += `Chapter: ${i.manga_eps}\n`
									teks += `Link: ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									master.sendMessage(from, buff, god, teks)
								}
							})
							break
						case 'kissmanga-search':
							if (!q) return master.reply(from, 'Search?', god)
							KissMangaSearch(q).then(async(res)=>{
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Link: ${i.manga_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.reply(from, teks, god)
							})
							break
						case 'aminoapps-search':
							if (!q) return master.reply(from, 'Search?', god)
							AminoApps(q).then(res => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Community: ${i.community}\n`
									teks += `Desc: ${i.community_desc}\n`
									teks += `Link: ${i.community_link}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								master.reply(from, teks, god)
							})
							break
						case "mangatoon-search":
						  if (!q) return master.reply(from, "Search?", god)
						  Mangatoon(q).then(async (res) => {
						    no = 0
						    for (let i of res) {
						      buff = await getBuffer(i.comic_thumb)
						      no += 1
						      teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• Urutan: ${no.toString()} •\n`
						      teks += `Comic: ${i.comic_name}\n`
						      teks += `Type: ${i.comic_type}\n`
						      teks += `Link: ${i.comic_url}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      master.sendMessage(from, buff, god, teks)
						    }
						  })
						  break
						case "viva-news":
						  VivaNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Jenis: ${i.berita_jenis}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    master.sendMessage(from, buff, god, teks)
						  })
						  break
						case "kontan-news":
						  KontanNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Jenis: ${i.berita_jenis}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    master.sendMessage(from, buff, god, teks)
						  })
						  break
						case "merdeka-news":
						  MerdekaNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    master.sendMessage(from, buff, god, teks)
						  })
						  break
						case "wamods-search":
						  if (!q) return master.reply(from, "Search?", god)
						  WAModsSearch(q).then(async (res) => {
						    no = 0
						    for (let i of res) {
						      no += 1
						      buff = await getBuffer(i.apk_image)
						      teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• Urutan: ${no.toString()} •\n`
						      teks += `Apk: ${i.apk_name}\n`
						      teks += "Description:\n"
						      teks += `${i.apk_desc}\n`
						      teks += `Link: ${i.apk_url}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      master.sendMessage(from, buff, god, teks)
						    }
						  })
						  break
						case "emoji-image":
						  if (!q) return master.reply(from, "Search?", god)
						  Emojis(q).then(async (res) => {
						    no = 0
						    for (let i of res.unicode_pack) {
						      buff = await getBuffer(i.vendor_thumb)
						      no += 1
						      teks = "Unicode Description:\n"
						      teks += `${res.unicode_desc}\n`
						      teks += "\n•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• List: ${no.toString()} •\n`
						      teks += `Vendor: ${i.vendor_name}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      master.sendMessage(from, buff, god, teks)
						    }
						  })
						  break
						case "coronainfo":
						  if (!q) return master.reply(from, "Negara?", god)
						  CoronaInfo(q).then(res => {
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    teks += `\nNegara: ${res.negara}\n`
						    teks += `Informasi: ${res.informasi}\n`
						    teks += `Total Kasus: ${res.total_kasus}\n`
						    teks += `Total Kematian: ${res.total_kematian}\n`
						    teks += `Total Sembuh: ${res.total_sembuh}\n`
						    teks += `Link: ${res.informasi_lengkap}\n`
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    master.reply(from, teks, god)
						  })
						  break
						
						case "jalantikus-meme":
						  var res = await JalanTikusMeme()
							buff = await getBuffer(res)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nNgakak?\n"
							teks += `\nSource: ${res}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							master.sendMessage(from, buff, god, teks)
							break
						
  //***RANDOM***//
  case 'waifu':
					reply(mess.wait)
				    try {
						axios.get(`https://waifu.pics/api/sfw/waifu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					master.sendMessage(from, ifu, image, {quoted: ftroli, caption: "Kaburr ada wibu"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'megumin':
					reply(mess.wait)
				    try {
						axios.get(`https://waifu.pics/api/sfw/megumin`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					master.sendMessage(from, ifu, image, {quoted: ftroli })
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'shinobu':
					reply(mess.wait)
				    try {
						axios.get(`https://waifu.pics/api/sfw/shinobu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					master.sendMessage(from, ifu, image, {quoted: ftroli })
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
				case 'loli':
					reply(mess.wait)
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					master.sendMessage(from, lomli, image, { quoted: ftroli, caption: 'Cintai Loli Mu>_<' })
					break
					  
  case 'yuri':
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
anu = await getBuffer(kon)
master.sendMessage(from, anu, image, { quoted: god, thumbnail: fakeimg4})
break
case 'anal':
reply(mess.wait)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
kon = await getBuffer(aku)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'lesbian':
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
kon = await getBuffer(kau)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'eroneko':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'bj':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'kitsune':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'pussy':
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
master.sendMessage(from, hai, image, { quoted: god, thumbnail: fakeimg4})
break
case 'wallpaper':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'neko2':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'baka':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'slap':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'poke':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'neko2':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case 'keta':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
kon = await getBuffer(hai)
master.sendMessage(from, kon, image, { quoted: god, thumbnail: fakeimg4})
break
case  'awoo':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
case  'blowjob':
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
case  'hentai': 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
case  'megumin':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
case  'neko':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
case  'trapnime':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
master.sendMessage(from, buffer, image, { quoted: god, thumbnail: fakeimg4})
break
//***MAKER***//
case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Fajar|Alfarizi`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
            case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} saya eka`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					master.sendMessage(from, buffer1, image, {quoted: god, thumbnail: fakeimg4})
					break				 
						case 'nuliskiri': case 'nulis':					 
									if (args.length < 1) return reply('mau nulis apa?')
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										master.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: god, caption:'Jangan sampai ketahuan'})
										limitAdd(sender, limit)
										})
									}
									break
					        	case 'nuliskanan': 
						            if (args.length < 1) return reply('mau nulis apa?')
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										master.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: god, caption:'Jangan sampai ketahuan'})
										limitAdd(sender, limit)
										})
									}
									break
						        case 'foliokiri': 
						            if (args.length < 1) return reply('mau nulis apa?')
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										master.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: god, caption:'Jangan sampai ketahuan'})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan': 
						         	if (args.length < 1) return reply('mau nulis apa?')
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										master.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: god, caption:'Jangan sampai ketahuan'})
										limitAdd(sender, limit)
									})
									}
									break
//*****asupan****//
case '+62':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=ItsMeVean`)
break
case 'bocil':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeVean`)
break
case 'ukhti':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=ItsMeVean`)
break
case 'rikagusriani':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=ItsMeVean`)
break
case 'ghea':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=ItsMeVean`)
break

//***OTHERR***//
       case 'gay':
		if (args.length < 1) return reply('tag temanmu!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					master.sendMessage(from, 'Seberapa gay lu: '+rate+'\n\nJawaban : '+ kl+'%', text, {quoted:god})
					break
					case 'covid':
if (!q) return reply(`Example : ${prefix + command} japan`)
reply(mess.wait) 
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
copid = `❒ *「 Covid ${q} 」* ❒ \n\n*Total Kasus :* _${cvd.result.total_case}_\n*Total Meninggal :* _${cvd.result.total_deaths}_\n*Total Sembuh :* _${cvd.result.total_tests}_\n*Kasus Hari Ini :* _${cvd.result.today_cases}_\n*Meninggal Hari Ini :* _${cvd.result.today_deaths}_\n*Total Dirawat :* _${cvd.result.total_active}_`
reply(copid)
break
case 'covidglobal':
reply(mess.wait) 
cvdg = await fetchJson(`https://jar-api.xyz/api/covidworld?apikey=aichan`)
coped = `❒ *「 Covid World 」* ❒ \n\n*Total Kasus :* _${cvdg.result.totalCases}_\n*Total Meninggal :* _${cvdg.result.deaths}_\n*Total Sembuh :* _${cvdg.result.recovered}_\n*Kasus Tertutup :* _${cvdg.result.closedCases}_\n*Total Dirawat :* _${cvdg.result.activeCases}_`
reply(coped)
break
case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            master.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftroli })
            break
            case 'creategroup':
			case 'creategrup':
				if (args.length < 1) return reply(`Penggunaan ${prefix}   creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (god.message.extendedTextMessage != undefined){
                    mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					master.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break
            case 'xox':
            const somtoyy = sotoyy[Math.floor(Math.random() * sotoyy.length)]
            master.sendMessage(from, `[  🎰 | X O X ]\n-----------------\n\n*${somtoyy}*\n\n-----------------\n[  🎰 | XOX ]\n\nKeterangan : Jika anda Mendapatkan Huruf O 3 Huruf Berarti Anda Menang\n\nContoh : O : O : O<=====`, MessageType.text, { quoted: ftroli })
            break
                  case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					master.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: ftroli })
					break
					case 'motivasi':
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					master.sendMessage(from, vass, image, { quoted: ftroli, caption: '*Motivasi*\n\n'+ vasi })
					break
					case 'kehidupan':
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					master.sendMessage(from, crot, image, { quoted: ftroli, caption: '*Quotes Kehidupan*\n\n'+ quo })
					break
		        case 'islami':
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					master.sendMessage(from, islam, image, { quoted: ftroli, caption: '*Quotes Islami*\n\n'+ isl })
					break	
		       case 'nasehat':
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					master.sendMessage(from, nase, image, { quoted: ftroli, caption: '*Quotes Nasehat*\n\n'+ nsh })
					break	
					case 'emoji':
			if (!q) return reply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
              case 'pantun':{
				const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
				const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
     			reply(`*Pantun :* \n${ran_pantun}`)
				}			
				break
				case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					master.sendMessage(from, tod, image, { caption: '*Dare*\n\n' + der, quoted: ftroli })
					break
					case 'jadian':
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ❤ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
					case 'kataeka':
				master.updatePresence(from, Presence.composing) 
				quotes = body.slice(1)
				const kta =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang']
				const su = kta[Math.floor(Math.random() * kta.length)]
				master.sendMessage(from, ''+su+'\n\n_*kata eka*_', text, { quoted: ftroli })
				break
				case 'artinama':
                if (args.length < 1) return ephe('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join(' ')}`, {method: 'get'})
					ephe('Menurut nama:\n\n'+anu.result)
				break
				case 'memeindo':
				buffer = await getBuffer(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
				master.sendMessage(from, buffer, image, { quoted:ftroli, caption: '.......' })
				break
				case 'ssweb':
				reply(mess.wait) 
 pe = args.join(' ')
 anu = await getBuffer(`https://api-rull.herokuapp.com/api/ssweb?url=${pe}`)
 master.sendMessage(from, anu, image, {quoted:ftroli})
 break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await master.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: god})
fs.unlinkSync(ran)
})
break   
      
case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = god.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
master.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
    case 'sticker': 
    case 'stiker':
    case 'sgif':
    case 'sg':
    case 's':
            if ((isMedia && !god.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
            const media = await master.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                master.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && god.message.videoMessage.seconds < 11 || isQuotedVideo && god.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
                const media = await master.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            master.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break   
            case "emoji":
        if (!q) return reply("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break
                   case 'toimg':
                   reply(mess.wait) 
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmediqa = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaq = await master.downloadAndSaveMediaMessage(encmediqa)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${mediaq} ${ran}`, (err) => {
						fs.unlinkSync(mediaq)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						master.sendMessage(from, buffer, image, {quoted: ftroli, caption: 'nihhh'})
						fs.unlinkSync(ran)
					})
					break 
                    case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await master.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:god})
						fs.unlinkSync(ran)
					})
					break
    case 'balik':
	encmediau = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await master.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:god})
fs.unlinkSync(ran)
	})
break
                    case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await master.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:god})
						fs.unlinkSync(ran)
					})
				break
case 'tes':
case 'test':
reply(monospace('Active..'))
break

case 'ping':			 
case 'p':
case 'speed':			 
case 'sp':
speedz(master, reply)
break

case 'runtime':
uptime = process.uptime()
anjink =`${shp}𝑩𝒐𝒕 𝑹𝒖𝒏𝒕𝒊𝒎𝒆
\`\`\`${kyun(uptime)}\`\`\``
reply(anjink)
break
//***UPSW***//
case 'upswteks':
if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    master.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    master.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !god.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
						buff = await master.downloadMediaMessage(encmedia)
						master.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !god.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
						buff = await master.downloadMediaMessage(encmedia)
						master.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !god.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
						buff = await master.downloadMediaMessage(encmedia)
						master.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await master.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    master.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    master.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    master.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: god, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        //****MATIIN BOT****//
                        case 'shutdown':
					if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
				return master.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				//*****masterGONZ***//
						case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        master.sendMessage(from, ram, image, { quoted: god, caption: rem }); 
        break
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara master`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await master.sendMessage(from, li, image, { quoted: god });
        break
      case "pinterest":
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await master.sendMessage(from, di, image, { quoted: god });
        break
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break
        case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              master.sendMessage(from, link, video, {
                quoted: god,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              master.sendMessage(from, link, image, {
                quoted: god,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break
        case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break
        case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            master.sendMessage(from,{url:images},image,{quoted:god})
            });
            break
            case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
				case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
				case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await master.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await katalog(tbuff,ytresult)
			break
			case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
        case 'tiktoknowm':   case 'tiktok':
if (!q) return reply('Linknya?')
									reply(mess.wait)
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											master.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted: god, caption:me})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break							 
			  case 'tiktokaudio': 
if (!q) return reply('Linknya?')
reply(mess.wait)
link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${link}`)
master.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: god})
									break
         case 'igstalk':
            if (!q) return reply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
         case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return reply("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return reply("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              master.sendMessage(from, link, video, {
                quoted: god,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              master.sendMessage(from, link, image, {
                quoted: god,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break
        case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          master.sendMessage(from, teks, text, {
            quoted: god, 
          });
        });
        break;
case 'owner':
case 'creator':
case 'author':
             let ini_list = []
   {
  ini_list.push({
            "displayName": 'eka',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:𝐄 𝐊 𝐀\nitem1.TEL;waid=6281515589573:6281515589573\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'mark',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:WhatsApp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'danu',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:𝐃 𝐀 𝐍 𝐔(2nd Number)\nitem1.TEL;waid=380944292908:380944292908\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          }
          )
  }
  hehex = await master.sendMessage(from, {
        "displayName": `3 kontak`,
        "contacts": ini_list
        }, 'contactsArrayMessage', { quoted: god })
        master.sendMessage(from,'Ini Kak Kontak Boss Saya 😇',text,{quoted: hehex})
break

case 'script':
case 'sc':
reply(`${shp5} *Free Script Bot Wa* ${shp5} :\n\nhttps://github.com/hexagonz/SELF-HX\n\nhttps://github.com/MhankBarBar/termux-wabot`)
break
               
//***GROUP ONLY***/
             case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						master.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				break
                    
case 'antidelete':
if (!itsMe && !isOwner) return 
if(!q)return reply(`_Example : ${prefix + command} on/off_`)
const groupId = isGroup ? groupMetadata.jid : ''
const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
const isRevoke = dataRevoke.includes(from)
const isCtRevoke = dataCtRevoke.data
const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
            //const argz = arg.split(' ')
//if (args.length < 1) return zynn.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [on/off]`, MessageType.text)
if (q == 'on') {           
if (isGroup) {
        if (isRevoke) return master.sendMessage(from, `_Antidelete Telah Diaktifkan Di Grup Ini Sebelumnya!_`, MessageType.text)
        dataRevoke.push(from)
        fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke))
        master.sendMessage(from, `_Success Enable Antidelete Grup!_`, MessageType.text, {quoted: god})
} else if (!isGroup) {
        master.sendMessage(from, `_Untuk Kontak Penggunaan ${prefix}antidelete ctaktif_`, MessageType.text,{quoted: god})
}
} else if (q == 'off') {
if (isGroup) {
        if (!isRevoke) return reply('_Anti Delete Sudah Di Nonaktifkan_')
        const index = dataRevoke.indexOf(from)
        dataRevoke.splice(index, 1)
        fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke))
        master.sendMessage(from, `_Success disable Antidelete Grup!_`, MessageType.text,{quoted: god})
} else if (!isGroup) {
        master.sendMessage(from, `_Untuk Kontak Penggunaan ${prefix}antidelete ctmati_`, MessageType.text,{quoted: god})
}
}
break
                 case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'enable') {
						if (isWelkom) return reply('Udah aktif gan')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break 
           case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					master.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = god.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					master.sendMessage(from, tagu, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
					case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await master.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            master.sendMessage(from, pict, image, {quoted: god})
            break
            case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = god.message.extendedTextMessage.contextInfo.participant
		    master.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = god.message.extendedTextMessage.contextInfo.participant
		    master.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await master.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					master.sendMessage(from, yeh, text, { quoted: god })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         master.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
                 case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname}* ✪══`+ teks +'╚═══〘 TOBI BOT 〙═══', members_id, true)
					break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						master.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						master.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					master.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                master.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                master.groupMakeAdmin(from, members_id)
                break
                case 'imgtag':
                    if ((isMedia && !god.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
                        filePath = await master.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await master.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var opti = {
                            contextInfo: { mentionedJid: mem },
                            quoted: god
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        master.sendMessage(from, ini_buffer, image, opti)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                case 'notif':
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await master.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: ftroli
}
await master.sendMessage(from, options, text)
break
case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await master.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					master.sendMessage(from, yeh, text, { quoted: ftroli})
					break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					master.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					master.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
				master.updatePresence(from, Presence.composing)
				master.groupLeave(from)
						break
             case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await master.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				master.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isOwner && !god.key.fromMe) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   master.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                master.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                master.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                master.sendMessage(from, 'Succes Hacked', text, {quoted: god})
					break
case 'asmaulhusna':
const asmaulhusna = function asmaulhusna() {
	return new Promise((resolve, reject) => {
		fetch("https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataAsmaulHusna.json")
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
p = await asmaulhusna()
txt = `*ASMAUL HUSNA*\n\n`
for (let i of p.data) {
txt += `${shp} *Nomor :* ${i.index}\n`
txt += `${shp} *Latin :* ${i.latin}\n`
txt += `${shp} *Arab :* ${i.arabic}\n`
txt += `${shp} *Indo :* ${i.translation_id}\n`
txt += `${shp} *Inggris :* ${i.translation_en}\n\n`
}
reply(txt) 
break
          case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
                case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'speedtest':
if (!itsMe && !isOwner) return
reply(mess.wait)
exec('speedtest', async(err, stdout) => {
		if (err) return reply(String(err))
		if (stdout){
server = stdout.split('Server: ')[1].split('\n')[0]
isp = stdout.split('ISP: ')[1].split('\n')[0]
latency = stdout.split('Latency:     ')[1].split('\n')[0]
down = stdout.split('Download:  ')[1].split('\n')[0]
uploadd = stdout.split('Upload:  ')[1].split('\n')[0]
urlsp = stdout.split('Result URL: ')[1]
teks = '*SPEEDTEST*\n\n'
teks += shp + ' *Server :* ' + server + '\n'
teks += shp + ' *Isp :* ' + isp + '\n'
teks += shp + ' *Latensi :* ' + latency + '\n'
teks += shp + ' *Download :* ' + down + '\n'
teks += shp + ' *Upload :* ' + uploadd + '\n'
teks += shp + ' *Url :* ' + urlsp + '\n'
console.log(teks)
let v2 = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${urlsp}&full=false&type=jpeg`)
master.sendMessage(from, v2, image,{quoted:god, caption:teks})
}
})
					break

//***ENDINGGG***//
default:
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  master.sendMessage(from, ucapan, text, {quoted: god, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
master.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:god,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
master.sendMessage(from, ucapan1, text, {quoted:god, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 master.sendMessage(from, ucapan, text, {quoted: god, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
master.sendMessage(from, ucapan1, text, {quoted:god, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 master.sendMessage(from, ucapan, text, {quoted: god, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
if (budy.startsWith('<')){
if(!itsMe) return
console.log(color('[EVAL]'), color(moment(god.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 :~`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(monospace(pes))
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(monospace(e))
}
}

if (chats.startsWith('>')){
				if(!itsMe) return
				console.log(color('[EVAL]'), color(moment(god.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 :~`))
				try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
	reply(monospace(e))
	}
}

if (budy.startsWith('x')){
try {
  if (!itsMe) return
return master.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: god})
} catch(err) {
e = String(err)
reply(monospace(e))
}
}

if (budy.startsWith('$')){
if (!itsMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${fake} :~ ${err}`)
if (stdout) {
reply(monospace(stdout))
}
})
}

if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'PRIVATE-CHAT', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("undefined")){
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
