"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 4000;
const prisma = new client_1.PrismaClient();
app.get('/', (req, res) => {
    res.send('Hello, TypeScript + Express!');
});
app.get('/users', async (_, res) => {
    const users = await prisma.user.findUnique({
        where: {
            id: 2
        }
    });
    res.json(users);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
