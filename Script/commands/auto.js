module.exports = {
 config:{
 name: "autodl",
 version: "0.0.2",
 hasPermssion: 0,
 credits: "SHAON",
 description: "auto video download",
 commandCategory: "user",
 usages: "",
 cooldowns: 5,
},
run: async function({ api, event, args }) {},
handleEvent: async function ({ api, event, args }) {
 const axios = require("axios")
 const request = require("request")
 const fs = require("fs-extra")
 const content = event.body ? event.body : '';
 const body = content.toLowerCase();
 const { alldown } = require("shaon-videos-downloader")
 if (body.startsWith("https://")) {
 api.setMessageReaction("🎭", event.messageID, (err) => {}, true);
const data = await alldown(content);
 console.log(data)
 let Shaon = data.url;
 api.setMessageReaction("👀", event.messageID, (err) => {}, true);
 const video = (await axios.get(Shaon, {
 responseType: "arraybuffer",
 })).data;
 fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"))

 return api.sendMessage({
 body: `𝐀𝐮𝐭𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹✅\n🎬 𝐄𝐧𝐣𝐨𝐲 •➠𝗔𝗟𝗘𝗡~𝗕𝗢𝗧❤️‍🩹🎀`,
 attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")

 }, event.threadID, event.messageID);
 }
}
}
