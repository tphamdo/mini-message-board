"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageListGet = messageListGet;
exports.newMessageGet = newMessageGet;
exports.newMessagePost = newMessagePost;
exports.messageGet = messageGet;
const messages_1 = __importDefault(require("../messages"));
function messageListGet(_req, res) {
    res.render('index', { title: 'Mini Messageboard', messages: messages_1.default });
}
function newMessageGet(_req, res) {
    res.render('form');
}
function newMessagePost(req, res) {
    messages_1.default.push({
        text: req.body.message,
        user: req.body.user,
        added: new Date(),
    });
    res.redirect('/');
}
function messageGet(req, res) {
    const messageId = parseInt(req.params.messageId);
    if (isNaN(messageId)) {
        res.redirect('/');
    }
    else {
        res.render('message', { message: messages_1.default[messageId] });
    }
}
