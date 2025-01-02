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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = SUHAIL_23_00_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlVa2JHb0JBcXhpWnVwQ0ZEbDJ0WVk3RXp4NTJDWTZ1TDVqbm5YbHEzanc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImM3dUJ2cHNQUjl1UzNwbk5FY2d1a1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTNjYzY0YjUtNjFjYi00MDI2LWEwMGEtM2UyY2RmZWI2YzE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDEwNyxcbiAgICAgIDIwOSxcbiAgICAgIDQ4LFxuICAgICAgMTUzLFxuICAgICAgMjgsXG4gICAgICAyNDcsXG4gICAgICA1NSxcbiAgICAgIDEzMixcbiAgICAgIDEwMyxcbiAgICAgIDQxLFxuICAgICAgOTYsXG4gICAgICAyMSxcbiAgICAgIDIxMCxcbiAgICAgIDEyOCxcbiAgICAgIDE1MixcbiAgICAgIDE1MixcbiAgICAgIDIxMyxcbiAgICAgIDg5LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjI2LFxuICAgICAgMTM3LFxuICAgICAgNixcbiAgICAgIDE1NCxcbiAgICAgIDExNyxcbiAgICAgIDE2MixcbiAgICAgIDEzMyxcbiAgICAgIDEzNSxcbiAgICAgIDY0LFxuICAgICAgMTgyLFxuICAgICAgMjAzLFxuICAgICAgODcsXG4gICAgICA0NCxcbiAgICAgIDEzNSxcbiAgICAgIDI0MyxcbiAgICAgIDE2NyxcbiAgICAgIDEzLFxuICAgICAgOTAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMjhIQTkyVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NTUzMTU4MTc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMDAwNzAzOTcwNTI1MzoxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCS8J2QnvCdkKfwnZCj8J2QrvCdkKvwnZCoIPCdkJrwnZCk8J2QrPCdkKHwnZCi8J+lt/Cfj73wn4et8J+HuVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltUStNTUJFSnkxM0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGJSbXRYYnBXUEVEQk0vR1dicVBSUjZIVmdWVnRYZVRyK3AzclJ2eUJ6OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0SkRpZk1DSEEzR2NQYVV6Z0JrUTJwS1VuV0RuZGs5bUZzb1ZQVUFXSlZqY2pTczZ2VzZDbTRUVW1FdE9SRkFRb2tyUFUySW5YSEV3Q1ErS2duU1hCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnZG9LNGVZM2pvV09nd2MxQy9CR3RUMnF5ZytxbkFXT1NhalpheHBNZjBpclBFQUZMTjJFOFozVE1yaktnSTdQb3lMWmttNmtCT2ZkN3FZc24vU1FBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk1NTMxNTgxNzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4NTg4NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJR2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHZC5qc29uIjogIntcImtleURhdGFcIjpcImptNDNyMlhsOEhZL2JhVGR5bnhsRStTS2RyVEU1WUhQL3poYyttY0VWdnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDEwOTEyNzc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4NTg4NTAxNzlcIn0iCn0=


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
