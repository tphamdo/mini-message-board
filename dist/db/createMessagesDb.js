#! /usr/bin/env node
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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pg_1 = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR(255),
  username VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (message, username, added)
VALUES
  ('Hi this is a message from Trueman', 'Trueman', NOW()),
  ('Hi from Odin', 'Odin', NOW()),
  ('Hi from Julia', 'Julia', NOW());
`;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv.slice(2);
        if (args.length !== 1) {
            console.error('Expected 1 argument: <local-db-url>');
            return -1;
        }
        console.log('seeding...');
        const client = new pg_1.Client({
            connectionString: args[0],
        });
        try {
            yield client.connect();
            yield client.query(SQL);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            yield client.end();
            console.log('done');
        }
    });
}
main();
