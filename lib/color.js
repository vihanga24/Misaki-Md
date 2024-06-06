//base by ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★ 
//re-upload? recode? copy code? give credit ya :)
//Instagram: heyitsvihanga
//Telegram: t.me/lets_fuck_the_system
//GitHub: @vihanga24
//WhatsApp: +94752799279
//want more free bot scripts? send me a msg on whatsapp

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
