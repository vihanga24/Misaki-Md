//base by ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★ 
//re-upload? recode? copy code? give credit ya :)
//Instagram: heyitsvihanga
//Telegram: t.me/lets_fuck_the_system
//GitHub: @vihanga24
//WhatsApp: +94752799279
//want more free bot scripts? send me a msg on whatsapp

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }