//base by ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★ 
//re-upload? recode? copy code? give credit ya :)
//Instagram: heyitsvihanga
//Telegram: t.me/lets_fuck_the_system
//GitHub: @vihanga24
//WhatsApp: +94752799279
//want more free bot scripts? send me a msg on whatsapp

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
