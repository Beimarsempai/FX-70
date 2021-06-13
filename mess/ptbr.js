const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.tterro = () => {
	return `Hazlo Bien ${prefix}ppt pedra, ${prefix}ppt papel o ${prefix}ppt tesoura`
}

exports.waitfig = () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`❗Espera un poco~ Onichan~..⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`✅Sucesso✅`
}

exports.levelon = () => {
	return`✅Se ha activado la función de niveles✅`
}

exports.leveloff = () => {
	return`❌la función de nivel fue deshabilitada❌`
}

exports.levelnoton = () => {
	return`🚫La función de nivel está desactivada🚫`
}

exports.levelnol = () => {
	return`Eres nivel 0... \nYa te registraste para comenzar a ganar XP?`
}

exports.ban = () => {
	return`🛂Estas baneado🛂`
}

exports.stick = () => {
	return`❌Se produjo un error al crear la calcomanía.❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌El comando solo se puede usar en el grupos >\\\<❌`
}

exports.ownerG = (ownerName) => {
	return`El comando solo puede ser utilizado por Felixcrack🕴`
}

exports.ownerB = (ownerName) => {
	return`El comando solo puede ser utilizado por ${ownerName}🕴`
}

exports.admin = () => {
	return`❌No eres admin 💩`
}

exports.Badmin = () => {
	return`❌El comando solo se puede usar cuando el bot es un adm del grupo 😑👑❌'`
}

exports.registrarB = (pushname, prefix) => {
	return`Holaa ${pushname}\n\nNo te has regustrado:(\n\nRegistraste para poder usar el bot:3:\n\nComando: ${prefix}registrar tu nombre|tu edad\nPor ejemplo: ${prefix}registrar Félix|16`
}

exports.nsfw = () => {
	return`🚫Funciones NSFW deshabilitadas en este grupo🚫`
}

exports.erro = () => {
	return`❌Ocurrio Un Error❌\n\nInténtalo De Nuevo.`
}


