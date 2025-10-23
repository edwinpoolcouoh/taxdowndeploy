"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCreditCustomer = exports.deleteCustomer = exports.updateCustomer = exports.getCustomerId = exports.getCustomer = exports.createCustomer = void 0;
const customerRepository_1 = require("../repositories/customerRepository");
let c = [];
const createCustomer = (data) => {
    try {
        const newCustomer = Object.assign({ id: 1 }, data);
        const bd = (0, customerRepository_1.create)(newCustomer);
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return newCustomer;
    }
    catch (error) {
        throw new Error('Error creating customer');
    }
};
exports.createCustomer = createCustomer;
const getCustomer = (filters) => {
    try {
        const bd = (0, customerRepository_1.read)(filters); // Aqui se podrian agregar filtros de una busqyeda mas especifica
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return c;
    }
    catch (error) {
        throw new Error('Error retrieving customers');
    }
};
exports.getCustomer = getCustomer;
const getCustomerId = (id) => {
    try {
        const bd = (0, customerRepository_1.read)({ id });
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return c.find(c => c.id === id);
    }
    catch (error) {
        throw new Error('Error retrieving customer by ID');
    }
};
exports.getCustomerId = getCustomerId;
const updateCustomer = (id, data) => {
    try {
        // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de mandar el update
        const customerSeacrh = (0, customerRepository_1.read)({ id });
        if (customerSeacrh.statusCode !== 200) {
            throw new Error('Customer not found');
        }
        const bd = (0, customerRepository_1.update)(id, data);
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return bd;
    }
    catch (error) {
        throw new Error('Error updating customer');
    }
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => {
    try {
        // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de mandar al customer, de igual manera s epodria poner validacion para saber si realmente se puede eliminar
        const customerSeacrh = (0, customerRepository_1.read)({ id });
        if (customerSeacrh.statusCode !== 200) {
            throw new Error('Customer not found');
        }
        const bd = (0, customerRepository_1.remove)(id);
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return bd.statusCode === 200;
    }
    catch (error) {
        throw new Error('Error deleting customer');
    }
};
exports.deleteCustomer = deleteCustomer;
const addCreditCustomer = (id, amount) => {
    try {
        // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de cambiarle el monto al customer
        const customerSeacrh = (0, customerRepository_1.read)({ id });
        if (customerSeacrh.statusCode !== 200) {
            throw new Error('Customer not found');
        }
        const bd = (0, customerRepository_1.update)(id, { creditoDisponible: amount });
        if (bd.statusCode !== 200) {
            throw new Error('Database error');
        }
        return bd;
    }
    catch (error) {
        throw new Error('Error adding credit to customer');
    }
};
exports.addCreditCustomer = addCreditCustomer;
