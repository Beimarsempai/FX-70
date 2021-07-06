/*Olá usuário..
Este bot foi criado para o uso sem fins lucrativos
Criador: Italia
Colaboradores: Resen e Toin
*/

//_API WHATSAPP WEB
const { WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');

//_MÓDULOS NPM
const fs = require('fs');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const googleImage = require('g-i-s');

promote = '*Hola Bienvenido🥳*'
xd = '༊෴✿𝒞𝓇𝓎ℬ𝒶𝒷𝓎✿〄࿐'
demote = '*Jajajajajajaa ya no eres admin🤣*'
leave = '\`\`\`Pedazo De Aborto 🥺👍🏿 Nunca Te Quisimos👋\`\`\`'
//_ARQUIVOS DA LIB
const {color, bgcolor} = require('./lib/color');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { addMetadata } = require('./lib/exif.js')


//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./data/nsfw.json'));
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const z24 = JSON.parse(fs.readFileSync('./data/zm.json'))
const _leveling = JSON.parse(fs.readFileSync('./data/leveling.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'));

//_ OUTROS ARQUIVOS DO BOT
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const { msgFilter, isUrl } = require('./utils')
const { help, m18 } = require('./help/help')
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const { ptbr } = require('./mess')
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd
const { Exkey } = JSON.parse(fs.readFileSync('./data/apikey.json')) 
const { ZeksKey } = JSON.parse(fs.readFileSync('./src/apikey.json'))
const { LolKey } = JSON.parse(fs.readFileSync('./src/apikey.json'))

//_INFORMAÇÕES DO BOT(settings)
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
const blocked = []

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Felix🧙‍♂️\n' 
            + 'ORG:Creador De FX-BOT-V70\n' 
            + 'TEL;type=CELL;type=VOICE;waid=16303967746:+1 630-396-7746\n' 
            + 'END:VCARD'

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VICTORIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VICTORIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VICTORIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VICTORIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VICTORIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VICTORIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

//_CONEXÃO WHATSAPP WEB 
async function starts() {
	const CryBaby = new WAConnection()
	CryBaby.version = [2, 2119, 6]
	CryBaby.logger.level = 'warn'
    console.log(banner.string)
	console.log(color('[ BOT]','aqua'), color("Escanee el código QR para conectarse...", "yellow"))
	CryBaby.on('qr', () => {
		console.log(color('👆'), color(' Escanea el QR de arriba, para iniciar FX BOT!!'))
	})

	fs.existsSync('./CryBaby.json') && CryBaby.loadAuthInfo('./CryBaby.json')
	CryBaby.on('connecting', () => {
		start('2', 'Conectando 🔥...')
	})
	CryBaby.on('open', () => {
		success('2', 'Ya Me Conecté 👌🏻!!!')
	})
	await CryBaby.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./CryBaby.json', JSON.stringify(CryBaby.base64EncodedAuthInfo(), null, '\t'))

//_FUCTION DE BOAS-VINDAS
CryBaby.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await CryBaby.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await CryBaby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `┏━━━━━━━━━━━━━━━━━
┃          「 *𝗛𝗢𝗟𝗔* 」
┃@${num.split('@')[0]}👋
┃BIENVENIDO AL GRUPO 
┃*${mdata.subject}*
┃Usa ${prefix}CryBaby\n┃Para Poder Usar El Bot
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃   「 *_BIENVENIDO_* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️ *Suscríbete*:
┠⊷️*http://bit.ly/2ZUH2jP
┠⊷️ *Grupo Oficial*:
┠⊷️ *http://bit.ly/3hpkba4
┠⊷️ *Escribe ${prefix}CryBaby
┃⊷️ *Para Poder Usar El Bot*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️「 *DESCRIPCIÓN* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
  ${mdata.desc}*
┗━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				CryBaby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await CryBaby.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Adiós : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				CryBaby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await CryBaby.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await CryBaby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			CryBaby.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await CryBaby.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await CryBaby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙎𝙀 𝙈𝘼𝙏𝙊 𝘼 𝙐𝙉 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Dato : Reciente\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			CryBaby.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
      CryBaby.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
            const testat = budy
            const totalchat = await CryBaby.chats.all()
			const botNumber = CryBaby.user.jid
			const ownerNumber = [`12603763944@s.whatsapp.net`]
			const ownerNumberB = []
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await CryBaby.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isBanned = ban.includes(sender)
			const isWelkom = isGroup ? welkom.includes(from) : true
            const isNsfw = isGroup ? nsfw.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
            const isUser = checkRegisteredUser(sender)
			const isPremium= prem.includes(sender)
			const isOwnerB = ownerNumberB.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
            const q = args.join(' ')
            const id = botNumber
            const tescuk = ["0@s.whatsapp.net"]
			let pushname = CryBaby.contacts[sender] != undefined ? CryBaby.contacts[sender].vname || CryBaby.contacts[sender].notify: undefined
    
			const reply = (tej) => {
				CryBaby.sendMessage(from, tej, text, {quoted:mek})
			}
			const sendMess = (teks) => {
				CryBaby.sendMessage(from, teks, text)
			}
            const sendImage = (tis) => {
		        CryBaby.sendMessage(from, tis, image, {quoted:mek})
            }
			const mentions = (ops, memberr, sender, id) => {
				(id == null || id == undefined || id == false) ? CryBaby.sendMessage(from, ops.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : CryBaby.sendMessage(from, ops.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 CryBaby.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
             const sendPtt = (teks) => {
                 CryBaby.sendMessage(from, audio, mp3, {quoted: mek })
            }
             
//_FUCTION PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
          
//_TIPO DE USUÁRIO
if (groupAdmins) {prema = 'Admin🤓'}if (isPremium) {prema = 'Premium😎'} if (isOwner) {prema = 'CryBaby🕴🏽'} if (isUser) {prema = 'Registrado 🥳'} else {var prema = 'Miembro Común🗿'}

//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ════❖LEVEL UP❖════

  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Nombre: @${namelv.split('@')[0]}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ XP: ${getLevelingXp(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Rango: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  
   ════❖LEVEL UP❖════`,
contextInfo: {mentionedJid: [namelv]}}
CryBaby.sendMessage(from, lvup, text, {quoted: mek})
//CryBaby.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
}
} catch (err) {
console.error(err)
}
} 

//_DINHEIRO 
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}
            
if (budy.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return('🧐')
CryBaby.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Adios ${sender.split("@")[0]} 🤡🚫🏳️‍🌈`)
setTimeout( () => {
CryBaby.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
CryBaby.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}

////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
CryBaby.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
CryBaby.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "??"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

//_TIPO DE MENSAGENS
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//_CORES(cores das letras no terminal)
colors = ['red','white','black','blue','yellow','green','aqua','magenta','orange']

//_VISUALIZA AS MENSAGENS 
CryBaby.chatRead(from)

//if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return

//ANTI-SPAM BY ITALU
if (isCmd && msgFilter.isFiltered(from)) {
CryBaby.sendMessage(from, `Sem flood @${sender.split('@')[0]}...\n\nAguarde 5 segundos antes de usar outro comando✅`, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
		
//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
		
//_USUÁRIO BANIDO
if (isCmd && isBanned) {
return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
          
//_COMANDOS
if (!isGroup && isCmd) console.log(color('COMANDO DETECTADO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
if (isCmd && isGroup) console.log(color('COMANDO DETECTADO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname),'EN:', color(groupName))
			
//_MENSAGENS
if (!isCmd && isGroup) console.log(color('MENSAJE RECIBIDO', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log(color('MENSAJE RECIBIDO', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname))

//_RESPONDER AUTOMATICAMENTE
if ((budy === 'bot') || (budy === 'BOT') || (budy === 'Bot')) {
buf = fs.readFileSync(`./src/onichan.mp3`)
CryBaby.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === "fdp") || (budy === "Fdp") || (budy === "FDP")) {
CryBaby.updatePresence(from, Presence.composing)
reply("teu pai")
}
if ((budy === "oi bot") || (budy === "Oi bot")) {
CryBaby.updatePresence(from, Presence.composing)
reply("oi")
}
if ((budy === "vtnc") || (budy === "Vtnc")) {
CryBaby.updatePresence(from, Presence.composing)
reply("Tomar no cu é vitamina, como você e suas primas")
}
if ((budy === "vsfd") || (budy === "Vsfd")) {
CryBaby.updatePresence(from, Presence.composing)
reply("Vtnc")
}
if ((budy.match("sexo")) || (budy.match("Sexo"))) {
CryBaby.updatePresence(from, Presence.composing)
reply(`¿Con Ropa? 😏`)
}
if (budy === "pnc") {
CryBaby.updatePresence(from, Presence.composing)
reply(`vsfd ${pushname}`)
}
if ((budy === "cleito") || (budy === "Cleito")) {
cleitu = fs.readFileSync(`./src/edmi.webp`)
CryBaby.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Edmilson") || (budy === "edmilson")) {
cleitu = fs.readFileSync(`./src/cleito.webp`)
CryBaby.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy.includes('kkkkkkkkkkk')) || (budy.includes('KKKKKKKKKK'))) {
reply('Qual a graça?🤨')
}

if (budy.match('CryBaby')) {
result = fs.readFileSync(`./src/mask.webp`)
CryBaby.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('CryBaby')) {
result = fs.readFileSync(`./src/mask.webp`)
CryBaby.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('CryBaby')) {
result = fs.readFileSync(`./src/mask.webp`)
CryBaby.sendMessage(from, result, sticker, {quoted: mek })
}

switch(testat) {
//_ COMANDOS Z24
case 'lia':
case 'Lia':
case 'LIA':
if (!isGroup) return reply( 'L-Lia-chan 😳👉👈')
break
               
case 'eat':
case 'Eat':
case 'EAT':
if (!isGroup) return reply( 'Ala o maluco que gosta de poesia acústicaKKKKKKKKK')
break

case 'braia':
case 'Braia':
case 'BRAIA':
if (!isGroup) return reply( 'Lek do rabão gostoso😋')
break
             
case 'gil':
case 'Gil':
case 'GIL':
if (!isGroup) return reply( 'Me obrigue a fazer figuras G-gilson-chan 😔👉👈')
break

case 'edu':
case 'Edu':
case 'EDU':
if (!isGroup) return reply( 'Oin dudu, poderia depositar R$3,000 na minha conta?🥺👉👈')
break

case 'insidu':
case 'Insidu':
case 'INSIDU':
if (!isGroup) return reply( 'Ó o cp mnkkkkkkkk')
break

case 'xavoso':
case 'Xavoso':
case 'XAVOSO':
if (!isGroup) return reply( 'Vamos fuck?💪😏')
break

case 'tada':
case 'Tada':
case 'TADA':
if (!isGroup) return reply( 'Tada não é ghost😙')
break

case 'help':
case 'Help':
case 'menu':
case 'Menu':
textmenu = `        ────────────────
Hola ${pushname} Usa ${prefix}menu en caso de que quieras usar mis comandos🧙‍♂️
        ────────────────`
reply(textmenu)
break
}
             
//_COMANDOS
switch(command) {
//_MENU
case 'help':
case 'menu':
case '?':
case 'ajuda':
case 'comandos':
msgFilter.isFiltered(from)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const xingg = getLevelingId(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
const chec = getLevelingId(sender)
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
uptime = process.uptime()
myMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
myDays = ['Domingo','Segundo','Tercero','Cuatro','Quinto','Viernes' ,'Sábado'];
var tglk = new Date();
var day = tglk.getDate()
bulan = tglk.getMonth()
var thisDay = tglk.getDay(),
thisDay = myDays[thisDay];
var yy = tglk.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
const serial = getRegisterSerial(sender)
const idade = getRegisterAge(sender)
const nreg = getRegisterName(sender)
const checATM = checkATMuser(sender)
const users = `${_level.length}`
const chatss = `${totalchat.length}`
const comandost = totalcmd
costum(help(pushname, prefix, temporizador, uptime, hr, tanggal, groupName, users, chatss, prema, checATM, useLevel, useXp, requireXp, patt, comandost ), text, tescuk, cr)
if(useLevel == undefined && useXp == undefined){
reply('Hola UwU si aparece "undefined" \nUsa el comando #registrar')
}
break

case 'm18':
if (!isNsfw) return reply(ptbr.nsfw())
costum(m18(pushname, prefix), text, tescuk, crh)
break

//_TESTES
case 'mz24':
if (!isZ24) return reply('Comando exclusivo z24')
CryBaby.sendMessage(from, mz(prefix), text, tescuk, cr)
break

case 'gc':
case 'grupo':
if (body.endsWith('cerrar')){
  CryBaby.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
break
						             
case 'leaderboard':
					case 'lb':
						if (!isGroup) return reply(mess.only.group)
						_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
						mentioned_id = []
						let leaderboard = '-----[ LOS RANGOS MAS ALTOS UWU ]----\n\n'
						try {
					     for (let i = 0; i < 3; i++) {
								if (i == 0) {
									leaderboard += `${i + 1}º 🥇 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 1) {
									leaderboard += `${i + 1}º 🥈 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 2) {
									leaderboard += `${i + 1}º 🥉 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								}
								mentioned_id.push(_level[i].jid)     
							}
							mentions(leaderboard, mentioned_id, true)
						} catch (err) {
							console.log(err)
							CryBaby.sendMessage(from, `É necessário que no mínimo 3 pessoas tenham level...`, text, {quoted: mek})
						}
					break

case 'ts':
CryBaby.sendMessage(from, bahasa(prefix, sender), text, {
quoted: mek
})
break

//_TESTESS
case 'bugreport':
const bug = body.slice(10)
 if (args.length > 300) return CryBaby.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nError: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
CryBaby.sendMessage('12603763944@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensaje enviado a mi dueño >///<")
break

case 'request':
const pesann = body.slice(8)
if (args.length > 300) return CryBaby.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
const teks2 = `[REQUEST]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [sender]},
}
CryBaby.sendMessage('12603763944@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensaje enviado a mi dueño >///<")
break

case 'oye':  
case 'simi':
case 'we':
case 'Simi':
case 'simih':
				   if (args.length < 1) return reply('¿Dónde está el texto??')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://api.simsimi.net/v1/?text=${text}&lang=es`, {method: 'GET'})
				   CryBaby.sendMessage(from, anu, text, {quoted: mek})
				   break				  


case 'prem':
if (isPremium) return reply('¡Eres un usuario premium!')
else {
reply('No eres un usuario premium...')
}
break

case 'clima':
case 'tempo':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
CryBaby.sendMessage(from, anu, image, {quoted: mek})
break

case 'time':
const hott = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const hual = `Horário: ${hott}`
reply(hual)
break

//_GIT DO BOT

case 'macumba':
pedido = body.slice(8)
buf = fs.readFileSync(`./src/macu.mp4`)
CryBaby.sendMessage(from, buf, video, {quoted: mek})
break

case 'hi':
if (isBanned) return reply('Você está banido')
break

case 'boc':
if (!isOwner) return reply(ptbr.ownerB())
const horatt = moment.tz('America/Sao_Paulo').format('HH:mm')
const horaAtual = `${horatt}`
if (/*horaAtual == '08:42' && */ammOff == "off" && isGroup) {
const aMimirMp3 = fs.readFileSync('./src/acorda.mp3')
const aMimirSt = fs.readFileSync('./src/sonic.webp')
for (let _ of groupMembers) {
CryBaby.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
CryBaby.sendMessage(_.jid, aMimirSt, sticker)
}
ammOff = "on"
} else if (/*horaAtual != '08:42' && */ammOff == "on") {
ammOff = "off"
}
break
case 'take':
		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, CryBaby, mek, from)
			break
//_ENVIA OS ARQUIVOS .JSON By: Resen 
case 'jsonfiles':
if (!isOwner) return reply(ptbr.ownerB())
const daftarfile = fs.readFileSync('./database/json/daftar.json')
CryBaby.sendMessage(from, daftarfile, document, {mimetype: 'json', filename: 'daftar.json'})
break

case 'omais':				
membr = []
const mett = groupMembers
const msdd = groupMembers
const siapssa = mett[Math.floor(Math.random() * mett.length)]
const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
bbebn = `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`
membr.push(siapssa.jid)
mentions(bbebn, membr, true)
break    

case 'addxp':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Fue añadido ${args[1]} en xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'timer':
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("Escoger entre: \nsegundo\nminuto\nhora\n\nExemplo: =timer 30 segundo")}
setTimeout( () => {
reply("El tiempo acabó")
}, timer)
break

case 'addprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} se ha agregado con éxito a la lista de usuarios premium👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
delp = prem.indexOf(oh)
prem.splice(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} ha sido eliminado de la lista de usuarios premium✖`
mentions(`${susp}`, mentioned, true)   
break

case 'ban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'send':
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var pesan = pc.split("|")[1];
CryBaby.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
break

case 'ttp':
msgFilter.isFiltered(from)
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(body.slice(4))}`)
CryBaby.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'attp':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
CryBaby.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'check':
if (isOwner) return reply('Hola Felixcrack')
else {
reply('Hola miembro común')
}
break 

//_LEVEL ATUAL
case 'level':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (!isLevelingOn) return reply(ptbr.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
levela =
`  ════❖ LEVEL ❖════

╭╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Nombre: @${sender.split("@")[0]}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ XP: ${userXp}/${requiredXp}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Level: ${userLevel}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Rango: ${patt}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼

  ════❖ LEVEL ❖════`     
CryBaby.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
  
//_ENVIA O VCARD DO DONO
case 'criador':
case 'vcard':
case 'owner':
case 'italu':
case 'italo':
await CryBaby.sendMessage(from, {displayname: "Félix🧙‍♂️", vcard: vcard}, MessageType.contact)
break
                     
case 'ownergrup':
case 'ownergroup':
CryBaby.updatePresence(from, Presence.composing) 
options = {
text: `Propietario del grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
CryBaby.sendMessage(from, options, text, { quoted: mek } )
break
		
//const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']

case 'testime':
setTimeout( () => {
CryBaby.sendMessage(from, 'O tempo acabou', text) 
}, 10000)
setTimeout( () => {
CryBaby.sendMessage(from, '5 segundos restantes', text)
}, 5000)
setTimeout( () => {
CryBaby.sendMessage(from, '10 segundos restantes', text)
}, 0)
break

case 'gimage':
case 'googleimage':
try {
if (!isNsfw) return reply(ptbr.nsfw())
if (args.length < 1) return reply('Digite o que deseja buscar')
reply(ptbr.wait())
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('Ocurrió Un Error')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `Aquí está su investigación sobre: ${teks}`})
}
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'gato':
msgFilter.isFiltered(from)
reply(ptbr.wait())
try {
axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
CryBaby.sendMessage(from, buf, image, {quoted: mek,caption: "🐱"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'dog':
try {
msgFilter.isFiltered(from)
reply(ptbr.wait())
res = axios.get(`https://nekos.life/api/v2/img/woof`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'kill2':
if (!isOwner) return reply(ptbr.ownerB())
pm2 = `pm2 kill`
reply('A mimir...')
exec(pm2, (err, stdout) => {
if(err) return CryBaby.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
CryBaby.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'reiniciar':
if (!isOwner) return reply(ptbr.ownerB())
npm = `npm start`
reply('Reiniciando en unos segundos...')       
exec(npm, (err, stdout) => {
if(err) return CryBaby.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
CryBaby.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'exe':
CryBaby.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return CryBaby.sendMessage(from, "Comando inexistente", text, {quoted: mek})
if (stdout) {
CryBaby.sendMessage(from, stdout, text, {quoted: mek})
}
})
break
 
//_CONTADOR DE LETRAS
case 'contar':
msgFilter.isFiltered(from)
if (args.length == 0) return reply( '0 caracteres, porque obviamente no hay texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`El texto tiene ${count} caractere.`)
} else if (count > 1) {
reply(`El texto tiene ${count} caracteres.`)
}
break

case 'igstory': 
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=FELIXCRACKAPI409&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
for (let i of anu.data) {
teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
}
reply(teks.trim())
break

case 'mediafire': 
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=FELIXCRACKAPI409&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nombre Del Archivo: ${anu.name_file}
Tamaño del archivo : ${anu.file_size}
Fecha de carga: ${anu.upload_date}
Tipo de archivo : ${anu.file_type}
Enlace de descarga: ${anu.download}
Descripción : ${anu.description}`
CryBaby.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break

case 'playstore': 
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=FELIXCRACKAPI409&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
CryBaby.sendMessage(from, buffer, image, {quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nombre de apk : ${i.title}
App ID : ${i.appid}
Desarrollador : ${i.developer}
Precio : ${i.price}
Velocidad : ${i.rating}
Url Apk : ${i.url}
𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break

case 'searchsticker': 
case 'searchstiker': 
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=FELIXCRACKAPI409&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nombre : ${anu.title}`
dung = (anu.sticker)
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer2 = fs.readFileSync(rano)
costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case 'igstalk': 
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=FELIXCRACKAPI409&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Nombre de usuario : ${anu.username}
Nombre completo : ${anu.fullname}
Seguidores : ${anu.follower}
Siguiente : ${anu.following}
Verificado : ${anu.is_verified}
Negocios : ${anu.is_bussiness}
Privado : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break

case 'shopee': 
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=FELIXCRACKAPI409&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
for (let i of anu.data) {
teks += `Nama barang : ${i.name}
HMrG : ${i.hMrG}
Vendido : ${i.terjual}
Localización : ${i.location}
Cubrir : ${i.cover}
Existencias : ${i.stock}
Información : ${i.information}
Url : ${i.url}
Descripción : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'ytsearch': 
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=FELIXCRACKAPI409`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Subudido Por 🧐 : 
Nombre del Canal : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verificado : ${i.uploader.verified}
Video :
Nombre del video : ${i.video.title}
Url : ${i.video.url}
Duración : ${i.video.duration}
Descripción : ${i.video.snippet}
Fecha de carga: ${i.video.upload_date}
Vistas: ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
}
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'neonime': 
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=FELIXCRACKAPI409`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Neonime : ${i.title}
Link : ${i.link}
Deskripsi : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'apkpure': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=FELIXCRACKAPI409`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nombre de Apk: ${i.title}
Url : ${i.url}
Rating : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'igsearch': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=FELIXCRACKAPI409&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁a𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'happymod': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=FELIXCRACKAPI409&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nombre de Apk: ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
					
case 'togif': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await CryBaby.downloadAndSaveMediaMessage(encmediaaa)
reply(ptbr.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
CryBaby.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'shutdown':
if (!isOwner) return reply(ptbr.ownerB())
reply('Desligando en 3 segundos .....') 
setTimeout( () => {
CryBaby.close() }, 3000)
break

//_NULIS
case 'nulis':
if (args.length < 1) return reply(`Use o comando da seguinte forma: ${prefix}nulis (texto)`)
teks = body.slice(7)
reply(ptbr.wait())
anu = await fetchJson(`https://tools.zone-xsec.com/api/nulis.php?q=${teks}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buff = await getBuffer(anu.image)
CryBaby.sendMessage(from, buff, image, {quoted: mek, caption: '✏📕'})
break

//_INFORMAÇÕES DO USUÁRIO
case 'infome':
case 'perfil':
msgFilter.isFiltered(from)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
try {
ppimg = await CryBaby.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Nombre: @${sender.split("@")[0]}
  ‣ Registrado: ✅
  ‣ Edad: ${idad}
  ‣ Nombre de registro: ${regin}
  ‣ Registrado desde: ${usTime}
  ‣ Nivel: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Rango: ${patt}
  ‣ Link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
its = await getBuffer (ppimg)
CryBaby.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
reply('Información con "undefined" indica que aún no te has registrado \nUsa el comando =registrar')
}
break

//_EFEITO REVERSE PARA VIDEO  
case 'reversevid':
if (!isQuotedVideo) return reply('Marcar un video ')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
CryBaby.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':
if (!isQuotedVideo) return reply('Marque un vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
CryBaby.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isQuotedVideo) return fakegroup('Marque un vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
CryBaby.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break

//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isQuotedAudio) return reply('Marque un áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque un áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await CryBaby.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque un áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await CryBaby.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque un áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await CryBaby.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
if (!isQuotedAudio) return reply('Marque un áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque un áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await CryBaby.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque un áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await CryBaby.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
CryBaby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'add':  
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN`)
					if (args.length < 1) return reply('A quien quieres añadir?')
					if (args[0].startsWith('08')) return reply('Utiliza el código de país')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					CryBaby.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('No se pudo agregar, tal vez porque es privado')
					}  
					break 
					case 'kick':  
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Etiqueta al que quieres eliminar!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					CryBaby.groupRemove(from, mentioned)
					} else {
					mentions(`Se Eliminará A @${mentioned[0].split('@')[0]} 🥵`, mentioned, true)
					CryBaby.groupRemove(from, mentioned)
					}					
					break 
					case 'play':  
				reply(ptbr.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=FELIXCRACKAPI409`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Canción Encontrada 🎶*\n\nTítulo : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}`				
				buffer = await getBuffer(anu.result.thumbnail)
				CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				reply(`「❗」 Descargando Y Enviando Archivo, No Spames La Concha De Tu Madre`)             
				CryBaby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', duration :-999999999999999999, filename: `${anu.result.title}.mp3`, quoted: mek, sendEphemeral: true})          
				
				break
//_INFORMAÇÕES DO BOT		
case 'info':
msgFilter.isFiltered(from)
me = CryBaby.user
uptime = process.uptime()
inf =
 `‣ Nombre del bot: ${me.name}
  ‣ Número del bot: @${me.jid.split('@')[0]}
  ‣ Dueño: Felixcrack 409
  ‣ Prefijo: [ ${prefix} ]
  ‣ El bot ha estado activo durante: ${temporizador(uptime)}
  ‣ Total de usuários: ${_registered.length} usuários
  ‣ Total chats: ${totalchat.length}`
buffer = await getBuffer(me.imgUrl)
CryBaby.sendMessage(from, buffer, image, {caption: inf, contextInfo: {mentionedJid: [me]}})
break

//_INFORMAÇÕES DO GRUPO
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
let { owner, creation, participants, desc } = groupMetadata;
const creationTime = moment.unix(creation);
try {
ppUrl = await CryBaby.getProfilePicture(from)
} catch {
ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppUrl)
infogp = 
` 
  ‣Nombre: ${groupName}
  ‣Número de miembros: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Creador : @${owner.split('@')[0]}
  ‣Miembros totales: ${participants.length} membros
  ‣Descripción:
  ${desc ? desc : ''}`
await CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: infogp, contextInfo: {mentionedJid: [owner.split]}})
break

//_TEMPO DE RESPOSTA DO BOT		
case 'ping':
case 'speed':
msgFilter.isFiltered(from)
const timestamp = speed();
const latensi = speed() - timestamp
CryBaby.updatePresence(from, Presence.composing)
uptime = process.uptime()
CryBaby.sendMessage(from, `Speed!\nTiempo de respuesta: ${latensi.toFixed(4)} segundos\n`, text, {quoted: mek})
break

//_BUSCA IMAGEM NO PINTEREST		
case 'img':
case 'image':
case 'imagem':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('Ingrese el comando junto con lo que desea buscar ')
CryBaby.updatePresence(from, Presence.composing)
reply(ptbr.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break

//_LISTAR USUÁRIO ONLINE
case 'online':
msgFilter.isFiltered(from)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(CryBaby.chats.get(ido).presences), CryBaby.user.jid]
CryBaby.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
contextInfo: { mentionedJid: online }
})
break

//_NEKOS PINTEREST
case 'neko':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {
quoted: mek, caption: `🥰`
})
} catch {
reply(ptbr.erro())
}
break

//_LOLIS PINTEREST
case 'loli':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {
quoted: mek, caption: `👀?`
})
} catch {
reply(ptbr.erro())
}
break

//_SHITPOST PINTEREST
case 'shitpost':
case 'shit':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
uk = ["shitpost br"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {
quoted: mek, caption: `إذا قمت بترجمة هذا فأنت سارق🤣👆`
})
} catch {
reply(ptbr.erro())
}
break

//_ANIME PINTEREST
case 'anime':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
am = ["anime tumblr",
"wallpaper anime hd",
"anime aestethic",
"anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {
quoted: mek, caption: `💮`
})
break

//_PROCURA WALLPAPER NO PINTEREST
case 'wp':
case 'wallpaper':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
CryBaby.sendMessage(from, pok, image, {
quoted: mek, caption: `Gostou do que escolhi?`
})
} catch {
reply(ptbr.erro())
}
break

case 'nombreninja':
msgFilter.isFiltered(from)
  if (args.length < 1) return reply('escreva seu Nombre')
CryBaby.updatePresence(from, Presence.composing)
Nombre = body.slice(10)
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${Nombre}`)
hasil = `Tu nombre de ninja:\n\n${data.result.ninja}`
reply(hasil)
} catch {
  reply(ptbr.erro())
}
break

case 'nsfw':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
//if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply(`Digite ${prefix}nsfw 1 para ativar`)
if (Number(args[0]) === 1) {
if (isNsfw) return reply('❎NSFW ya está activo en el grupo❎')
nsfw.push(from)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('✅Funciones NSFW activadas en ese grupo✅')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('🚫Funciones NSFW deshabilitadas en este grupo🚫')
} else {
reply(`Digite ${prefix}nsfw 1 para ativar, 0 para desativar o recurso`)
}
break
                   
case 'leveis':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('❎la función NIVELES ya está activada en el grupo❎')
_leveling.push(from)
fs.writeFileSync('./data/leveling.json', JSON.stringify(_leveling))
reply('✅se ha activado la función NIVELES✅')
} else if (Number(args[0]) === 0) {
_leveling.splice(from, 1)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('❌la función NIVELES ha sido desactivada❌')
} else {
reply(`Ejemplo\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
}
break

case 'setppgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await CryBaby.downloadAndSaveMediaMessage(ftgp)
await CryBaby.updateProfilePicture (from, medipp)
reply('✅foto de grupo cambiada✅')
break

case 'triggered':
case 'ger':
msgFilter.isFiltered(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.waitimg())
owgi = await CryBaby.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
nobg = fs.readFileSync(rano)
CryBaby.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})                               
} else {
reply('Necesita etiquetar o cargar una imagen para esto.')
}
break

case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.wait())
owgi = await CryBaby.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break

case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await CryBaby.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
haha = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} else {
reply('Necesitas etiquetar o subir una imagen ')
}
break

case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await CryBaby.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
haha = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} else {
reply('Necesitas etiquetar o enviar una imagen')
}
break

case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`¿Y El Texto? >\\\<`)
wtext = body.slice(7)
reply(ptbr.waitimg())
owgi = await CryBaby.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
haha = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} else {
reply('Necesitas etiquetar o enviar una imagen')
}
break

case '8bit':
msgFilter.isFiltered(from)
if (!q.includes('|')) return reply(`Ejemplo\nComando: ${prefix}8bit texto1|texto2`)
reply(ptbr.waitimg())
pc = body.slice(5)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
haha = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'bneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break
		
case 'luzneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'matrix':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(7)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'breakwall':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'dropwater':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'wolflogo':
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}wolflogo texto1|texto2`)
if (!q.includes('|')) return reply(`Ejemplo\nComando: ${prefix}wolflogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=FELIXCRACKAPI409&text1=${tx1}&text2=${tx2}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break
		
///_photoOXY
case 'flowertext':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(11)
reply(ptbr.waitimg())
haha = fetchJson(`https://api.zeks.xyz/api/flowertext?apikey=FELIXCRACKAPI409&text=${pc}`)
heh = await getBuffer(haha.result)
CryBaby.sendMessage(from, heh, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break
///_photoOXY

case 'lovepaper':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/lovemek/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'tfire':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=FELIXCRACKAPI409`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'sandw':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'firofiro':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=FELIXCRACKAPI409`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'text3d2':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'text3d':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(7)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=FELIXCRACKAPI409`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'phlogo':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
if (!q.includes('|')) return reply(`Ejemplo\nComando: ${prefix}phlogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(7)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=FELIXCRACKAPI409`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'phub':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=FELIXCRACKAPI409&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=sksksksksk&msg=#{pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'leavest':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(7)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/leavest?apikey=FELIXCRACKAPI409&text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'tlight':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(7)
reply(ptbr.waitimg())
haha = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=FELIXCRACKAPI409`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break


case 'narutobanner':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(14)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'romancetext':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(12)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'shadowtext':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(11)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'tiktokeffect':
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}tiktokeffect texto1|texto2`)
if (!q.includes('|')) return reply(`Ejemplo\nComando: ${prefix}tiktokeffect texto1|texto2`)
pc = body.slice(13)
nomor = pc.split("|")[0];
pesan = pc.split("|")[1];
if (nomor.length >= 9 ) return reply(`Texto 1 máximo 9 carateres`)
if (pesan.length >= 35 ) return reply(`Texto 2 máximo 35 carateres`)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${nomor}&text2=${pesan}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'neon':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(5)
if (pc.length >= 80 ) return reply(`Máximo 80 carateres`)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'hpotter':
if (args.length < 1) return reply('¿Y El Texto? >\\\<')
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
haha = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (haha.error) return reply(haha.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${haha.cep}
  ‣ Estado: ${haha.state}
  ‣ Cidade: ${haha.city}`
CryBaby.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
haha = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (haha.error) return reply(haha.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${haha.state}
  ‣ Cidades: 
    ${haha.cities}\n`
CryBaby.sendMessage(from, ccg, text, {quoted:mek})
break

case 'cartão':
case 'cartao':
haha = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (haha.error) return reply(haha.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${haha.result.card.network}
   ‣ Número: ${haha.result.card.number}
   ‣ Cvv: ${haha.result.card.cvv}
   ‣ Pin: ${haha.result.card.pin}
   ‣ Balanço: ${haha.result.card.balance}
   ‣ Validade: ${haha.result.card.expiration_month}/${haha.result.card.expiration_year}`
CryBaby.sendMessage(from, ccg, text, {quoted:mek})
break

case 'neve':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}neve texto1|texto2`)
if (!q.includes('|')) return reply(`Ejemplo\nComando: ${prefix}neve texto1|texto2`)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${tx1}&text2=${tx2}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'crismes':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}crismes texto`)
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'pubglogo':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${tx1}&text2=${tx2}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'bf4':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(4)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'nezuko':
msgFilter.isFiltered(from)
try {
hah = await fetchJson(`https://kagchi-api.glitch.me//waifu/nezuko`)
haha = await getBuffer(hah.url)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'cslogo':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}cslogo texto`)
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'lithgtext':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}lithgtext texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'silktext':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}silktext texto`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'flametext':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}flametext texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌')
}
break

case 'glowtext':
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}glowtext texto`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
break

case 'crosslogo':
try {  
if (args.length < 1) return reply(`Ejemplo\nComando: ${prefix}crosslogo texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${pc}&apikey=FELIXCRACKAPI409`)
haha = await getBuffer(haha.result)
setTimeout( () => {
CryBaby.sendMessage(from, haha, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.wait())
owgi = await CryBaby.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
haha = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} else {
reply('Necesitas etiquetar o enviar una imagen')
}
break

case 'wa.me':
case 'wame':
CryBaby.updatePresence(from, Presence.composing)
options = {
text: `Su enlace wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nO: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
CryBaby.sendMessage(from, options, text, {
quoted: mek
})
break

case 'notif':
if (!isGroupAdmins) return reply(ptbr.admin())
CryBaby.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if(args.length < 1) return CryBaby.reply('escribe algo como una advertencia ')
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await CryBaby.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: mek
}
await CryBaby.sendMessage(from, options, text)
break

//_TE MENCIONA
case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
CryBaby.sendMessage(from, tagme, text)
break


case 'ytsearch':
if (args.length < 1) return reply('Escriba lo que desea buscar')
reply('buscando...')
play = body.slice(9)
try {
anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${play}`)
if (anu.error) return reply(anu.error)
infomp3 = 
`    MÚSICA ENCONTRADA
   ‣ Título: ${anu.result.title}
   ‣ Fuente: ${anu.result.source}
   ‣ Canal: ${anu.result.channel}
   ‣ link: ${anu.result.url} 
   ‣ Duración: ${anu.result.duration}
   ‣ Tamaño: ${anu.result.size}
`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url)
CryBaby.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
})
} catch {
reply(ptbr.erro())
}
break

case 'dadosfake':
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    DADOS GERADOS
   ‣ Nombre: ${anu.Nombre}
   ‣ Sexo: ${anu.gender}
   ‣ Edad: ${anu.age}
   ‣ Teléfono: ${anu.phone}
   ‣ Tipo sanguíneo: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Contraseña: ${anu.password}
   ‣ CEP: ${anu.zip_code}`
CryBaby.sendMessage(from, dadosf, text, {quoted: mek})
break



//_CAPTURA O TEXTO NA IMAGEM
case 'ocr':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const com = await CryBaby.downloadAndSaveMediaMessage(ocrt)
reply(ptbr.wait())
await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
.then(oc => {
reply(oc.trim())
fs.unlinkSync(com)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(com)
})
} else {
reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
}
break



case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await CryBaby.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('CryBaby-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(ptbr.stick())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
CryBaby.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await CryBaby.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ptbr.waitgif())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('CryBaby-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`La conversión falló ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
CryBaby.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Debe cargar o etiquetar una imagen o video en 10 segundos`)
}
break

//_CONVERTE VÍDEO EM ÁUDIO
case 'tomp3':
CryBaby.updatePresence(from,
Presence.composing)
if (!isQuotedVideo) return reply(`Etiquetar un video con ${prefix}tomp3`)
reply(ptbr.wait())
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await CryBaby.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('❌no se pudo convertir el video a mp3❌')
buffer = fs.readFileSync(ran)
CryBaby.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
})
fs.unlinkSync(ran)
})
break

//_VOZ DO GOOGLE
case 'tts':
if (args.length < 1) return CryBaby.sendMessage(from, `Debes usar el comando correctamente:\n${prefix}tts (lengua) (texto)\nEjemplo: ${prefix}tts Buen dia abortos\n\nUse: ${prefix}ts para enumerar todos los idiomas`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return CryBaby.sendMessage(from, 'Y El Texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('¿Quieres Escribir La Biblia?')
: gtts.save(ranm, dtt, function() {
CryBaby.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

//_ALTERA O PREFIX
case 'setprefix':
if (args.length < 1) return
if (!isOwner) return reply(ptbr.ownerB())
prefix = body.slice(10)
up.prefix = prefix
fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
reply(`El prefijo se ha cambiado a: ${prefix}`)
break

//_BLOQUEIA O USUÁRIO
case 'block':
CryBaby.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
CryBaby.blockUser (`${body.slice(8)}@c.us`, "add")
CryBaby.sendMessage(from, `Número de bloqueado, comando recibido`, text, {
quoted: mek
})
break

//_DESBLOQUEIA USUÁRIO BLOQUEADO
case 'unblock':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
CryBaby.blockUser (`${body.slice(9)}@c.us`, "remove")
CryBaby.sendMessage(from, `Desbloquear, Orden aceptada`, text)
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO
case 'tagall':
msgFilter.isFiltered(from)
CryBaby.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isPremium) return reply('No eres un usuario premium...')
if (!isGroupAdmins) return reply(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} miembros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋⚋ ༒ ∴₰Ⱦꪋℓo፝֯֟ ߷ ༒ ⚋⚋◑╾╼╯', members_id, true)
break

//_LIMPA TODOS OS CHATS
case 'clearall':
if (!isOwner) return reply('Solo Felixcrack 409 Puede usar ese COMANDO')
anu = await CryBaby.chats.all()
CryBaby.setMaxListeners(25)
for (let _ of anu) {
CryBaby.deleteChat(_.jid)
}
reply('todos los chats han sido eliminados :)')
break

//_PROMOVE UM MEMBRO DO GRUPO
case 'promote':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
pro = 'Ok, le dare admin\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
CryBaby.groupRemove(from, mentioned)
} else {
mentions(`O usuário: @${mentioned[0].split('@')[0]} foi promovido para o cargo de administrador do grupo`, mentioned, true)
CryBaby.groupMakeAdmin(from, mentioned)
}
break

//_ALTERA O Nombre DO GRUPO
case 'setname':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
CryBaby.groupUpdateSubject(idgrup, `${body.slice(9)}`)
CryBaby.sendMessage(from, 'Nombre del grupo alterado ', text, {
quoted: mek
})
break

//_ALTERA A DESCRIÇÃO DO GRUPO
case 'setdesc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
CryBaby.groupUpdateDescription(from, `${body.slice(9)}`)
CryBaby.sendMessage(from, 'descripción del grupo alterada', text, {
quoted: mek
})
break

//_REBAIXA UM MEMBRO
case 'demote':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
reb = '\n'
for (let _ of mentioned) {
reb += `@${_.split('@')[0]}\n`
}
mentions(reb, mentioned, true)
CryBaby.groupRemove(from, mentioned)
} else {
mentions(`Oh usuário @${mentioned[0].split('@')[0]} Ya no eres admin 🤣`, mentioned, true)
CryBaby.groupDemoteAdmin(from, mentioned)
}
break

//_LISTA OS ADMINISTRADORES DO GRUPO
case 'listadmins':
case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(ptbr.group())
adl = `Lista de administradores de grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

//_ALTERA A FOTO DE PERFIL DO BOT
case 'setppbot':
CryBaby.updatePresence(from, Presence.composing)
if (!isOwner) return reply(ptbr.ownerB())
const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
const cuk = await CryBaby.downloadAndSaveMediaMessage(botpp)
await CryBaby.updateProfilePicture(botNumber, cuk)
reply('Gracias por la nueva foto de perfil')
break

//_LINK DO GRUPO
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
linkgc = await CryBaby.groupInviteCode(from)
reply('El enlace de invitación del grupo es: https://chat.whatsapp.com/'+linkgc)
break

//_RETIRAR BOT DO GRUPO
case 'leave':
if (!isGroup) return reply(ptbr.group())
if (isGroupAdmins || isOwner) {
CryBaby.groupLeave(from)
} else {
reply(ptbr.admin())
}
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO 
case 'hidetag':
CryBaby.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
if (!isGroup) return reply(ptbr.group())
htg = body.slice(9)
group = await CryBaby.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
quoted: mek
}
await CryBaby.sendMessage(from, options, text)
break

//_CONVERTE STICKER EM IMAGEM
case 'toimg':
CryBaby.updatePresence(from, Presence.composing)                       
if (!isQuotedSticker) return reply('Debes etiquetar una pegatina no animada para esto.')
reply(ptbr.wait())
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medtmg = await CryBaby.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply('❌falha ao converter sticker em imagem❌')
buffer = fs.readFileSync(ran)
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: 'conversão sucedida'})
fs.unlinkSync(ran)
})
break

case 'registrar':
case 'registrar':
case 'register':
case 'registra':
case 'rg':
case 'registrar':
if (isUser) return  reply('*❇️ Tu ya te has registrado  😑*')
if (!q.includes('|')) return reply(`Escriba correctamente:\nComando: ${prefix}registrar Nombre|edad\nEjemplo: ${prefix}registrar Felix|16`)
// if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar Nombre|idade\nExemplo: ${prefix}registrar Italu|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Ejemplo\nComando: ${prefix}registrar Nombre|edad\nEjemplo: ${prefix}registrar Félix|16`)
if (namaUser.length >= 60) return reply(`Seu Nombre é muito longo`)
if (umurUser > 40) return reply(`La edad máxima es de 40 años.`)
if (umurUser < 12) return reply(`La edad mínima es de 12 años.`)
veri = sender
try {
ppimg = await CryBaby.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`    〘 Registrado(a) con éxito 〙
  Código: ${serialUser}
╔════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nombre de usuário: @${sender.split("@")[0]}
╠≽️ Nombre de registro: ${namaUser}
╠≽️ Edad: ${umurUser}
╠≽️ Tu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚════════════════
Te registraste, escribe ${prefix}menú para listar mis comandos`
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
CryBaby.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break

//_FECHA O GRUPO
case 'closegp':
CryBaby.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
var nomor = mek.participant
const close = {
text: `Grupo cerrado por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
CryBaby.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break

case 'cpf1':
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
CryBaby.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: mek})
break

//_ABRE O GRUPO
case 'opengp':
  case 'abrirg':
CryBaby.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
  text: `Grupo abierto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
CryBaby.groupSettingChange (from, GroupSettingChange.messageSend, false)
CryBaby.sendMessage(from, open, text, {
  quoted: mek
})
break

//_APAGA MENSAGENS ENVIADAS PELO BOT
case 'delete':
  case 'del':
case 'apagar':
if (!isGroup)return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
try {
CryBaby.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedes borrar mensajes míos')
}
break

case 'welcome':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
if (args.length < 1) return reply('use =welcome 1 para activar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya Estaba Activo 🙄')
welkom.push(from)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('Se ha habilitado la función de bienvenida')
} else if (Number(args[0]) === 0) {
welkom.splice(from, disable)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('La función de bienvenida ha sido deshabilitada ')
} else {
reply(`Digite ${prefix}welcome 1 para activar, y 0 para deshabilitar la función`)
}
break

case 'clone':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await CryBaby.getProfilePicture(id)
buffer = await getBuffer(pp)
CryBaby.updateProfilePicture(botNumber, buffer)
mentions(`Robé la foto de perfil: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('ocurrio un error')
}
break
			
//mini games, rate, random
case 'dado':
msgFilter.isFiltered(from)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
CryBaby.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'caracoroa':
msgFilter.isFiltered(from)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
CryBaby.sendMessage(from, cararoa, sticker, {quoted: mek})
break
                
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Personas con este nombre: ${pushname} \nTienden a morir a ${idade} años de edad.`
reply(morte)
break
			
case 'sn':
const sn = ['Si', 'No']
gosto = body.slice(3)
if (args.length < 1) return CryBaby.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegún mis cálculos, creo que .... ${jawab}`
reply(hasil)
break
                   
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Tu eres:\n\n${gado}`
reply(hisil)
break

case "ppt":
msgFilter.isFiltered(from)
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["piedra","papel","tijera"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Ganaste ${ppg} en xp`
if ((pptb == "piedra" && args == "papel") || 
(pptb == "papel" && args == "tijera") || 
(pptb == "tijera" && args == "piedra")) {
var vit = "vitoria"
} else if ((pptb == "piedra" && args == "tijera") || 
(pptb == "papel" && args == "piedra") || 
(pptb == "tijera" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "piedra" && args == "piedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tijera" && args == "tijera")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "🎉🎉 VICTORIA DEL JUGADOR 🎉🎉"
}
if (vit == "derrota" ) {
var tes = "LA VICTORIA ES DE CryBaby-BOT"
}
if (vit == "empate" ) {
var tes = "El juego terminó en empate"
}
reply(`CryBaby-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Jugador gana") {
reply(pph)
}
break

case 'top5':
try{
if(!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Ocurrió Un Error')
}
break

case 'ship':
if (!isGroup) return reply(ptbr.group())
const ag = await CryBaby.getgroupMetadata.participants(from)
const mem2 = ag[Math.floor(Math.random() * (ag.length))]
const mem1 = ag[Math.floor(Math.random() * (ag.length))]
casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
CryBaby.sendMessage(from, casal, text, {quoted: mek, contextInfo: {"mentionedJid": [ag]}})
break
			
case 'slot':
msgFilter.isFiltered(from)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '?? : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '?? : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "¡Ganaste!!!"
} else {
var vitr = "Perdiste..."
}
const slott = 
`Consigue 3 iguales para ganar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                      @𝙵𝚎𝚕𝚒𝚡𝚌𝚛𝚊𝚌𝚔

${vitr}`
if (vitr == "¡Ganaste!!!") {
setTimeout( () => {
reply(`Ganaste ${ppg} en xp!!!`)
}, 1100)
}
CryBaby.sendMessage(from, slott, text, {quoted: mek})
break

case 'chance':
CryBaby.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return CryBaby.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
CryBaby.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
     
case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'Solo La Fimosis'} else if (tamanho == 13 ) {pp = 'Pasó El Promedio😳'} else if (tamanho == 14 ) {pp = 'Pasó El Promedio😳'} else if (tamanho == 15 ) {pp = 'Dios, ve a buscar mango?'} else if (tamanho == 16 ) {pp = 'Dios, ve a buscar mango?'} else if (tamanho == 17 ) {pp = 'Wey Tranquilo, La Mia No Es Un Pozo😳'} else if (tamanho == 18 ) {pp = 'Wey Tranquilo Man, La Mina No Es Un Pozo😳'} else if (tamanho == 19 ) {pp = 'Wey Tranquilo, La Mia No Es Un Pozo😳'} else if (tamanho == 20 ) {pp = 'Tienes un poste de luz entre las piernas'} else if (tamanho == 21 ) {pp = 'Tienes Un Poste De Luz Entre Tus Piernas'} else if (tamanho == 22 ) {pp = 'tienes un poste de luz entre tus piernas'} else if (tamanho == 23 ) {pp = 'Tienes Un Poste De Luz Entre Tus Piernas'} else if (tamanho == 24 ) {pp = 'Tienes Un Poste De Luz Entre Tus Piernas'} else if (tamanho > 25 ) {pp = 'Como se la piensas meter?'
}
hasil = `Tu pito mide ${random}cm\n\n${pp}`
reply(hasil)
break
   
case 'gay':
CryBaby.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'Hmm... Eres hetero😔'} else if (boiola == 21 ) {bo = '+/- Eri Gei?'} else if (boiola == 23 ) {bo = '+/- Eri Gei?'} else if (boiola == 24 ) {bo = '+/- Gei'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 32 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 33 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 34 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 35 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 36 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 37 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 38 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 39 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 40 ) {bo = 'Tengo mi desconfianza...😑'} else if (boiola == 41 ) {bo = 'Tienes razón?😏'} else if (boiola == 42 ) {bo = 'Tienes razón?😏'} else if (boiola == 43 ) {bo = 'Tienes razón?😏'} else if (boiola == 44 ) {bo = 'Tienes razón?😏'} else if (boiola == 45 ) {bo = 'Tienes razón?😏'} else if (boiola == 46 ) {bo = 'Tienes razón?😏'} else if (boiola == 47 ) {bo = 'Tienes razón?😏'} else if (boiola == 48 ) {bo = 'Tienes razón?😏'} else if (boiola == 49 ) {bo = 'Tienes razón?😏'} else if (boiola == 50 ) {bo = 'Eres O No?🧐'} else if (boiola > 51) {bo = 'Eres Gay :o🙈'
}
hasil = `Tu eres ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Tuviste suerte esta vez, el tambor estaba vacío."
} else if (tpa == "pow") {
var morte = "Hubo una bala en el tambor POW!"
}
if (morte == "Hubo una bala en el tambor POW!") {
setTimeout( () => {
CryBaby.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
CryBaby.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Vaya, deja que tus amigos también jueguen, vuelve a intentarlo en 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`El juego empezó!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
CryBaby.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
CryBaby.sendMessage(from,`Si no sabe cómo jugar, escriba: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':a
CryBaby.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
CryBaby.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ VICTORIAs: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Puntos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ VICTORIAs: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Puntos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ VICTORIAs: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Puntos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await CryBaby.sendMessage(from, `Hmm, es necesario que hayan jugado al menos 3 personas...`, text, {quoted: mek})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Aún no has iniciado el juego\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguien ya está jugando en este momento \nPor favor, espere un momento....`)
} else if (tttset.tttantibug == "on") {
reply(`Espere a que se complete la acción anterior ...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Escriba el comando con una coordenada\nEjemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('Espacio Ocupado\nIntenta en otra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('el espacio ya ha sido ocupado\nprueba con otra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
CryBaby.sendMessage(from, `🎉🎉 🎉🎉 VICTORIA DEL JUGADOR 🎉🎉 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
CryBaby.sendMessage(from, `🎉🎉 🎉🎉 VICTORIA DEL JUGADOR 🎉🎉 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
CryBaby.sendMessage(from, `🎉🎉 VICTORIA DE CryBaby🎉🎉\n\n➣  CASTIGO: ${randomTTTXP} XP 🔮`, text)
} else {
CryBaby.sendMessage(from, `🎉🎉 VICTORIA DE CryBaby 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
CryBaby.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  SIN GANANCIAS NI PÉRDIDAS`, text)
} else {
CryBaby.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
					
case 'amongus':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} \nwas E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//  CryBaby.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

case 'abrazo':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que lindo... @${sender.split("@")[0]} abrazo a @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break

case 'shipp':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break
//mini games, rate, random


//_COMANDOS ANIME
case 'why':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/why`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocurrio un error❌\n\nInténtalo de nuevo. ')
}
break

case 'spoiler':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/spoiler`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocurrio un error❌\n\nInténtalo de nuevo. ')
}
break

case 'owoify':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/owoify`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocurrio un error❌\n\nInténtalo de nuevo. ')
}
break

case 'name':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/name`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocurrio un error❌\n\nIntenta De Nuevo. ')
}
break

case 'kemonomimi':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'gecg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/gecg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'cuddle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'kiss':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'keta':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'yuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
case 'foxg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
case 'pat':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
case 'poke':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
case 'waifukawai':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
CryBaby.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocurrió Un Error')
}
break
		
case 'kemonomimi':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
CryBaby.sendMessage(from, buf, image, {quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocurrió Un Error')
}
break
		
case 'kuni':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
CryBaby.sendMessage(from, buf, image, {quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocurrió Un Error')
}
break 
case 'tickle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/tickle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
case 'random':
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
try {  
hah = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/randomp`)
haha = await getBuffer(hah.url)
CryBaby.sendMessage(from, haha, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
    case 'waifu':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

 case 'animeavatar':
 try {
 reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
                      
case 'wallpaper2':
try {
reply(ptbr.wait())
axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
                
case 'baka':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/baka').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break   

//_COMANDOS NSFW
case 'holo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

//GIF
case 'smug':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'solo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'ero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'erofeet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'spank':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'feet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'classic':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'holoero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'cum':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'eroyuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'eron':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'pwankg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'anal':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'lewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'lewdkemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'solog':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'lewdk':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

//GIF
case 'ngif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'blowjob':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'hentai':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'hololewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'trap':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'les':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'smallboobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'futanari':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'femdom':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'feed':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case'erok':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case'feetg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case'erokemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case'boobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break

case 'nsfwloli':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
loli.getNSFWLoli(async (err, res) => {
if (err) return reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
buffer = await getBuffer(res.url)
CryBaby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Seu lolicon safado😔'})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
                  
case 'pussy':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply(ptbr.erro())
} 
}
break
                       
//GIF
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
CryBaby.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
              
//GIF
case 'bjgif':
res = await fetchJson('https://nekos.life/api/v2/img/bj')
ggf = await getBuffer(res.url)
sendMediaURL(from, ggf, 'a')
break  
      
//GIF
case 'nsfwgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
                
//GIF
case 'slap':
axios.get('https://nekos.life/api/v2/img/slap').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break
                
//GIF
case 'rhug':
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break

case 'tits':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
if(args[0] === "1") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "2") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "3") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "4") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "6") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "7") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "8") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "9") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} 
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌Ocurrió Un Error❌\n\nIntenta De Nuevo. ')
}
break
//_ FIM DOS COMANDOS NSFW

default:
if (body == `${prefix}${command}`) {
hsl = `        ────────────────\nHola 👋 @${sender.split("@")[0]}!!\nEl Comando: ${prefix}${command} No Esta En Mi Menu\n\nTal Ves Lo Escribiste Mal?🧙‍♂️\nUse ${prefix}Menu ver el menu\n        ────────────────`
CryBaby.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
reply(ptbr.erro())
}
})
}
starts()
