//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243830461680";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJ5VDVINmZNcHk3R3hMek9ma2o4MW5ERm9KM0tPaDBrTEtHckFyTERVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmM1am9GVTlNWlBYRkFEb3R2MVZPb0pQN1k3eGNYS21iaWZ5OWxtQTdsbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSFBqdkcwOEdWS0RoNTFnWC9PeC92REo2dGF3Y1hEcWxaYXZZVFZVVW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQ2ZMS1RGeW50YmQ2eUNtam84Z2hWV0ZyTWVIWWlxY2dsR2hlNzdQZFJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FYnBjcmdIeUhWYTdXT0lQWnhHR0RoWkVQaVZyU2pXdHliMzlZWjVXMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIyRlBpOXRZdXpaRVoxN2QvZnprdWhaWnd0NGxsemJtMEZDSG1pYlVsZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxpVk1lV1RLaHBocklPWExVVHU4UmdHV09kWS9WYUdXcTlSbWNBdGpIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUV3dFRqRWhxaXdFa0gwVmE0d2xYdEt5U0dlMHNtVU1zeDN3Z3NvdnBHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFWSlFkV1VEaWhPOS90b0dZbE1hc1pTRzJjQWRSTWZCTnViVE5nOGNWUm9KSUk2SFVIQy9uTDd5MnJwbXVuelRCeDZqNDdIdC9TeC8yRXlTRlh6MmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IlRadnpDRk1pdzkxbkQzWkRUTXpPWEpCYWYyd0d6VW04Y0lJaHpDNUxRZkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQzODMwNDYxNjgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3ODcxMzQ3OUVFREExNDZGMzY5QzNCMThCRjYzNDc4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDAyOTAyMTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijd3Y3QzYmU2UkQ2SVJuMmlON25KS3ciLCJwaG9uZUlkIjoiMDM0YzhjZGItZDhjNS00YzZjLWFmYjgtOGY0ODE1MDc2ZTBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdUWjBFL1l6ZzN6Y3B2OTQxTXg3dWhkWnNpcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWMVZneiswTzBuMUVOc0IwWnc0UG1CUDJPMlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFZLMk1MV1YiLCJtZSI6eyJpZCI6IjI0MzgzMDQ2MTY4MDo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1FTlRPUiBBS0FHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT3Y5dWtERUpMeDZyMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFajM1UEJsSEQyN1FUZHRyNDVCazhkSW91K3dCc081cVJFV05COVlWa3pzPSIsImFjY291bnRTaWduYXR1cmUiOiJ5VDlQL1BCcUk3TXFWZzNDWGlTa1VLWEdmL1o5WE5nMFlzaEVUUlM1NjV2Z1RFM2RGWHh4Mmdidm40SHF2WUNQYmgxYWkyQmhvT2wxbVYrNE11Q1pBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVlNTMzA2MEwrdlhnaTF3eEF6eDBNNFdzZ3VNaEE0NzRyaVVkai9wbk01UnlQMWlwbVNiNVJjL1BkSEp6U2xRUTE0T29RSVBLT2tLUWFzenJORHVqaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4MzA0NjE2ODA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSTkrVHdaUnc5dTBFM2JhK09RWlBIU0tMdnNBYkR1YWtSRmpRZldGWk03In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwMjkwMjA3fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
