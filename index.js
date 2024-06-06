//base by ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★ 
//re-upload? recode? copy code? give credit ya :)
//Instagram: heyitsvihanga
//Telegram: t.me/lets_fuck_the_system
//GitHub: @vihanga24
//WhatsApp: +94752799279
//want more free bot scripts? send me a msg on whatsapp

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
