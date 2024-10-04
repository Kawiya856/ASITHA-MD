const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7NVyDKrJ#_5LsAoi9U63wMoAfojc2fAyi4FOG6dtYn050tVc5buo",
MONGODB: process.env.MONGODB || "94772484733",//enter mongo db url
};
