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
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../router/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', router_1.default);
describe('Customer API Routes', () => {
    test('POST - createCustomer (/)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post('/').send({});
        expect(response.status).toBe(201);
    }));
    test('GET - getCustomer (/)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/');
        expect(response.status).toBe(200);
    }));
    test('GET - getCustomerId (/?id=)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/?id=1');
        expect(response.status).toBe(200);
    }));
    test('DELETE - deleteCustomer (/id)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).delete('/1');
        expect(response.status).toBe(200);
    }));
    test('PUT - addCreditCustomer (/credit)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).put('/credit').send({ id: 1, amount: 100 });
        expect(response.status).toBe(200);
    }));
    test.only('PUT - updateCustomer (/id)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).put('/1').send({});
        expect(response.status).toBe(200);
    }));
});
