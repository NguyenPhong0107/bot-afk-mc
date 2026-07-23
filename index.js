const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '_ngphong_0107.aternos.me', // Thay IP server của bạn (VD: my-server.aternos.me)
  port: 15666,               // Thay Port server (VD: 25565 hoặc port Aternos cung cấp)
  username: 'Bot_AFK_Phong'   // Tên nick của bot trong game
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  console.log(`${username}: ${message}`)
})

bot.on('end', () => {
  console.log('Bot bị ngắt kết nối, đang thử lại...')
})

bot.on('error', err => console.log('Lỗi:', err))
