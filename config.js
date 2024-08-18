import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '255734980103', process.env.OWNER_NAME || 'lazack28', true],
  ['255779679079', 'lazack 28', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '𝐋𝐀𝐙𝐀𝐂𝐊-𝐌𝐃 v 2'
global.botname = process.env.BOT_NAME || '𝙇𝘼𝙕𝘼𝘾𝙆-𝙈𝘿'
global.oname = authorkessy
global.bname = botname

//Extra Shortcuts
global.smlink = process.env.SOCIAL_MEDIA_LINK || 'https://instagram.com/Lazack_28'
global.gclink = process.env.GROUP_LINK || 'https://chat.whatsapp.com/IIpL6gf6dcq4ial8gaJLE9'
 
//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.packname = process.env.BOT_NAME || '𝐋𝐀𝐙𝐀𝐂𝐊-𝐌𝐃 🥵'
global.stkpack = process.env.BOT_NAME || '𝙇𝘼𝙕𝘼𝘾𝙆-𝙈𝘿 🥵'
global.stkowner = process.env.OWNER_NAME || '© lazack md v2'

//Watermark
global.maker = process.env.MAKER || 'Made with Lazack'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

//global.pairingNumber = "{"noiseKey":{"private":{"type":"Buffer","data":"cDR7yhsppaWRBKfM1q0mSJuAEprVgBg0Lqj0Nt+Dslw="},"public":{"type":"Buffer","data":"/NFEVWYIZrRohRnamoz2gzaTmr1okJZT68wsS9P5fw4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YDGhtUx//LYaiIMkg8pENVnQWBXF/jz+1mKOX62x2UQ="},"public":{"type":"Buffer","data":"vprFBx1Mi2w9BHNth7dEQlWwWml+wUs+pWTJlSOoQQw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KEWszGYDtGey84cTRP71v427Lkwo5zpA7EaxMstOEWg="},"public":{"type":"Buffer","data":"B6ywr2OP2sz63/NryKlQK/Wl5mZMcTaEblzRYoV8jEw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GPBiY8VYjRvF8o9Gw/SCRItuUO03t+l8ZnOJmXez4Xc="},"public":{"type":"Buffer","data":"UU2cQm/ELsIMGr9wP5+1E4mLHB6yOodP9XyE8r1hLV0="}},"signature":{"type":"Buffer","data":"dtoUdr4ZqjYuHqZaN0uaFJbbIdXFp8lnokJ7apucBmYj+SbKJ0iGv3yISJqVqCf9yi7c9+C3G1j1OygsCquDjw=="},"keyId":1},"registrationId":213,"advSecretKey":"uW+tPj7CEmtwb6DljwWtqdM88NdSrppuVexiJwhC05M=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Ul4bOx0pSJKDt_7BGBs1Eg","phoneId":"dc791841-525d-454b-b587-8048d904c813","identityId":{"type":"Buffer","data":"rhXcchqLEIchrBENe2VKj+1rQVM="},"registered":true,"backupToken":{"type":"Buffer","data":"/Q00qo99zZMYeO0F0m523OwWnlQ="},"registration":{},"pairingCode":"TMR55Y2N","me":{"id":"255714844318:7@s.whatsapp.net","name":"...AUTHOR......OF......GOOGLE......","lid":"261555421765646:7@lid"},"account":{"details":"CKmdx/gCEKXuh7YGGAIgACgA","accountSignatureKey":"CAqCuusydMoZY7cK1u9Nc5RQ6gm2Y2lUnz969vKU9S8=","accountSignature":"6GL+rOgKiTTe4+c9KaFUqUK3M6l6Z1cjd19nkeMIIC/FQz5MhaCZWQhZ196aOQyhEYdwH+9LS39c6lzk5WRfCA==","deviceSignature":"pxZZftPaPR6H8koL5RPtgVBjqZCskeFeTzJmoQd4FlaL4ukxu+nsYNLnzNppzUF1JCa2kzKxJ3AE9rLI2Afthg=="},"signalIdentities":[{"identifier":{"name":"255714844318:7@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQgKgrrrMnTKGWO3CtbvTXOUUOoJtmNpVJ8/evbylPUv"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUICA=="},"lastAccountSyncTimestamp":1723987764,"lastPropHash":"4Cq4Ek","myAppStateKeyId" //

global.mods = ['255734980103','255734980103']
global.prems = ['255734980103','255734980103']
global.allowed = ['255734980103','255734980103']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
