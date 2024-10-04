const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=fR01BKBJ#U2ASvib0g2aVWH7p1PJ_alaHcEtxlqHJPEdXM9DowOs",
MONGODB: process.env.MONGODB || "94772484733",//enter mongo db url
};
