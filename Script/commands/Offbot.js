module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100001473448671", ""];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERROR ] You don't have permission to use this command, This Command Only For 𝗔𝗟𝗘𝗡🙂😈", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} ঘুমাচ্ছে কেউ ডাকিস না ওকে🥺`,event.threadID, () =>process.exit(0))
}
