"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpEnum = void 0;
exports.RegExpEnum = {
    password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
    phone: new RegExp('^[+]*[0-9]{5,20}$')
};
//# sourceMappingURL=regexp.enum.js.map