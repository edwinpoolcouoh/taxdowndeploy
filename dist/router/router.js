"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("../events/client");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    const customer = (0, client_1.createCustomer)(req.body);
    res.status(201).json(customer);
});
router.get('/', (req, res) => {
    res.json((0, client_1.getCustomer)(req.query));
});
router.get('/:id', (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) || isNaN(Number(req.params.id)))
        return res.status(400).json({ error: 'Invalid ID' });
    const customer = (0, client_1.getCustomerId)(Number(req.params.id));
    if (!customer)
        return res.status(404).json({ error: 'Not found Client' });
    res.json(customer);
});
router.delete('/:id', (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) || isNaN(Number(req.params.id)))
        return res.status(400).json({ error: 'Invalid ID' });
    const deleted = (0, client_1.deleteCustomer)(Number(req.params.id));
    if (!deleted)
        return res.status(404).json({ error: 'Not found Client' });
    res.json({ message: 'Deleted Customer' });
});
router.put('/credit', (req, res) => {
    var _a, _b;
    if (!((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.id) || isNaN(Number(req.body.id)) || !((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.amount) || isNaN(Number(req.body.amount))) {
        return res.status(400).json({ error: 'Invalid ID or Amount' });
    }
    const customer = (0, client_1.addCreditCustomer)(Number(req.body.id), req.body.amount);
    if (!customer)
        return res.status(404).json({ error: 'Not found Client' });
    res.json({ message: 'Updated Credit Customer' });
});
router.put('/:id', (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) || isNaN(Number(req.params.id)))
        return res.status(400).json({ error: 'Invalid ID' });
    const customer = (0, client_1.updateCustomer)(Number(req.params.id), req.body);
    if (!customer)
        return res.status(404).json({ error: 'Not found Client' });
    res.json({ message: 'Updated Customer' });
});
exports.default = router;
