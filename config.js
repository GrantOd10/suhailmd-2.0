const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349132099378";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_25_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2WlZWalFjb0p3RGI3RmtPalZsaGRwKzNFSVZ6SWhVQ1Q3MDFEY0RoUnJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjODNtekF0cVEyT1IyMGhhWFpvX0x3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxYWRmZWJlLTgyNzUtNGMzMy1hZDQ4LTMyYWQ3NmYzOWNlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAyMTIsXG4gICAgICAxOTYsXG4gICAgICAxLFxuICAgICAgMjA4LFxuICAgICAgMTQ2LFxuICAgICAgNzIsXG4gICAgICAxMjUsXG4gICAgICAyMjMsXG4gICAgICAxNDQsXG4gICAgICA2LFxuICAgICAgOTIsXG4gICAgICAxOTUsXG4gICAgICAxMTQsXG4gICAgICAyNDgsXG4gICAgICAxNzQsXG4gICAgICAyMjMsXG4gICAgICAyMjEsXG4gICAgICAyMzUsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDEyMyxcbiAgICAgIDUyLFxuICAgICAgMjAsXG4gICAgICAxODIsXG4gICAgICAxMzYsXG4gICAgICAxNjQsXG4gICAgICAyMzksXG4gICAgICAxMDEsXG4gICAgICAxMjUsXG4gICAgICAyMyxcbiAgICAgIDQ3LFxuICAgICAgMTA2LFxuICAgICAgNDQsXG4gICAgICA0OCxcbiAgICAgIDIxOSxcbiAgICAgIDEwMyxcbiAgICAgIDEwMyxcbiAgICAgIDk5LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFWN04yUllIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMyMDk5Mzc4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWaWJleiBIdWJcIixcbiAgICBcImxpZFwiOiBcIjMxMjExOTgwMzQ1NDc1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVvdzJBUTBMTFV1UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjRlVkR0Juc2hNSXZHWEFhS2Y0TmVtRnhuOEo4OWlVT25nbG1OZU5ydUF3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjIrcTUvN1p6OE8vNUFicS9qMHJTOWJ6RCs3cnB5NlRjVDI2eTdyQitKUFBWM2R1bHZjYUNSbzZQbmVsZ1hoMUp1M2RPVDV1dmtaT0xoVmJ4Z1RsaURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl5Z1JSSlB6bjJvTU03bld1U0NRU2t6cTVJejZiYkVNMWE4MUZXZ3I5OWpWd1lzcVYzUGpvZ3cwcFBWSnlYSjZKSTlEb0RqZGdmY1h6Skw2cTQwa0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzIwOTkzNzg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNTMzMTQxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
