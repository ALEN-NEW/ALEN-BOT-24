module.exports.config = {
    name: 'autotime',
    version: '10.02',
    hasPermssion: 0,
    credits: '𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️',
    description: 'সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['এখন রাত ১১টা বাজে,যারা সিংগেল তারা এখন chrome a ঢুকবে মনে হয়🤣\n ${global.config.BOTNAME} ']
},
             {
    timer: '1:00:00 AM',
    message: ['এখন রাত ১২টা বাজে Pookie গুলা বয়ফ্রেন্ড নিয়ে ব্যাস্ত মনে হয়🥹\n ${global.config.BOTNAME}']
},
						{
    timer: '2:00:00 AM',
    message: ['এখন রাত ১টা বাজে সবাই মনে হয়,ঘুমায় গেছে নাকি Chrome দেখতেছো🙈\n ${global.config.BOTNAME}']
},
						 {
    timer: '3:00:00 AM',
    message: ['এখন রাত ২টা বাজে যারা প্রেম করে তারা জেগে আছে🤭\n ${global.config.BOTNAME}']
},
						 {
    timer: '4:00:00 AM',
    message: ['__এখন রাত ৩টা বাজে, কিছু মানুষ প্রেম করে😩কিছু মানুষ ঘুমায়😑আমি শুধু জেগে আসি😶\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ']
},
						 {
    timer: '5:00:00 AM',
    message: ['__এখন রাত ৪টা বাজে,একটু পর ফজরের আযান দিবে, নামাজ পড়ে নিও সবাই\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ']
},
						 {
    timer: '6:00:00 AM',
    message: ['__এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?🤨না পড়লে পরে নাও ok🤗  \n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁']
},
						 {
    timer: '7:00:00 AM',
    message: ['__এখন সকাল ৬টা বাজে, ঘুম থেকে উঠো সবাই,আর পড়তে বসো😾😾\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['__এখন সকাল ৭টা বাজে সবাই দাত মেজে,ব্রেকফাস্ট করে নাও,,!😒😊\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['__এখন সকাল ৮ টা বাজে, সবার স্কুল-কলেজ এর সময় হইসে হয়তো,চলে যেও কিন্তূ 🤗\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ']
},
             {
    timer: '10:00:00 AM',
    message: ['__এখন সকাল ৯ টা বাজে মন দিয়ে কাজ ও পড়াশুনা করো সবাই🤗❤️\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['__এখন সকাল ১০টা বাজে মিস করছি তোমাদের🥺🥺কখন আসবে তুমরা🥺  \n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁']
},
						 {
    timer: '12:00:00 PM',
    message: ['__এখন সকাল ১১টা বাজে,বাচ্চাদের স্কুল শুটি হয়ে গেসে হয়তো\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁']
},					
						 {
    timer: '1:00:00 PM',
    message: ['__এখন দুপুর ১২টা বাজে,সবাই বাসায় যাও🤗 ❤️\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ']
},
						 {
    timer: '2:00:00 PM',
    message: ['__এখন দুপুর ১টা বাজে সবাই কাজ বন্ধ করে, গোসল করে নাও 😒 \n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁']
},
						 {
    timer: '3:00:00 PM',
    message: ['এখন দুপুর ২টা বাজে,,সবাই দুপুরের খাবার খেয়ে নাও😇\n${global.config.BOTNAME}']
},
						 {
    timer: '4:00:00 PM',
    message: ['এখন দুপুর ৩টা বাজে,সবাই একটু ঘুমাও 😒\n ${global.config.BOTNAME}']
},
						{
    timer: '5:00:00 PM',
    message: ['এখন বিকাল ৪টা বাজে গার্লস স্কুল ছুটি দিয়েছে চল সবাই মেয়ে দেখে আসি 👀\n ${global.config.BOTNAME} ']
},
						 {
    timer: '6:00:00 PM',
    message: ['এখন বিকাল ৫টা বাজে, যারা খেলা-ধুলা করবা তারা মাঠে যাও😻\n ${global.config.BOTNAME}']
},
						 {
    timer: '7:00:00 PM',
    message: ['এখন সন্ধ্যা ৬টা বাজে,,সবাই হাতমুখ ধুয়ে কিছু খেয়ে নাও এবং পরিবারের সাথে সময় কাটাও😊👍\n ${global.config.BOTNAME}']
},
             {
    timer: '8:00:00 PM',
    message: ['এখন সন্ধ্যা ৭ টা বাজে সবাই এখন পড়তে বসো 😾\n ${global.config.BOTNAME}']
},
             {
    timer: '9:00:00 PM',
    message: ['এখন রাত ৮টা বাজে✨\n ${global.config.BOTNAME}']
},
             {
    timer: '10:00:00 PM',
    message: ['এখন রাত ৯টা বাজে , যাদের ক্ষুধা লাগছে তারা খাবার খেয়ে নেও🙂\n ${global.config.BOTNAME}']
},
            {
    timer: '11:00:00 PM',
    message: ['এখন রাত ১০টা বাজে সবাই আড্ডা দিতাসে মনে হয়🎭\n ${global.config.BOTNAME}']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
