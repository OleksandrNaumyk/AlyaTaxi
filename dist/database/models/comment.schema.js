"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.CommentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    comment: {
        type: String,
        required: true
    },
    date_comment: {
        type: Date,
        required: true,
        default: new Date().toISOString()
    },
    id_trip: {
        type: String,
        required: false
    }
});
exports.CommentModel = mongoose_1.model('comments', exports.CommentSchema);
//# sourceMappingURL=comment.schema.js.map