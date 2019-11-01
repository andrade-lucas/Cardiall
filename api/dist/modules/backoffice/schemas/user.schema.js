"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    roles: [{
            type: String,
            required: true,
            enum: ['user', 'admin'],
            default: 'user'
        }],
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
});
//# sourceMappingURL=user.schema.js.map