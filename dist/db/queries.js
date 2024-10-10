"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessages = getAllMessages;
exports.insertMessage = insertMessage;
exports.getMessage = getMessage;
const pool_1 = __importDefault(require("./pool"));
function getAllMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM messages ORDER BY added DESC`;
        const { rows } = yield pool_1.default.query(query);
        return rows;
    });
}
function insertMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `INSERT INTO messages (message, username, added) VALUES ($1, $2, NOW())`;
        yield pool_1.default.query(query, [message.message, message.username]);
    });
}
function getMessage(messageId) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM messages WHERE id = $1`;
        const { rows } = yield pool_1.default.query(query, [messageId]);
        if (!rows.length)
            return {};
        return rows[0];
    });
}
