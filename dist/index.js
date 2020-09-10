"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const config_1 = require("./config");
const server = http.createServer(app_1.app);
server.listen(config_1.config.PORT, () => {
    console.log(`Listen ${config_1.config.PORT}`);
});
process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});
process.on('uncaughtException', error => {
    console.log('Error');
});
process.on('unhandledRejection', () => {
    console.log('Error');
});
//# sourceMappingURL=index.js.map