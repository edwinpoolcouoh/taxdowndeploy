"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.read = exports.creates = exports.create = void 0;
//Simulacion como si fuese una base de datos, pero realmente aqui se deberia establecer conexiones a la BD
let message = {
    SUCCESS: {
        statusCode: 200,
        message: 'Success'
    },
    ERROR: {
        statusCode: 500,
        message: 'Error'
    }
};
const create = (data) => {
    let result = message.ERROR;
    try {
        console.log('Creating customer in database:', data);
        result = message.SUCCESS;
    }
    catch (error) {
        console.error('Error creating customer in database:', error);
    }
    return result;
};
exports.create = create;
const creates = (data) => {
    let result = message.ERROR;
    try {
        console.log('Creating customers in database:', data);
        result = message.SUCCESS;
    }
    catch (error) {
        console.error('Error creating customers in database:', error);
    }
    return result;
};
exports.creates = creates;
const read = (filters) => {
    let result = message.ERROR;
    try {
        console.log('Reading customers from database with filters:', filters);
        result = message.SUCCESS;
    }
    catch (error) {
        console.error('Error reading customers from database:', error);
    }
    return result;
};
exports.read = read;
const update = (id, data) => {
    let result = message.ERROR;
    try {
        console.log(`Updating customer with id ${id} in database with data:`, data);
        result = message.SUCCESS;
    }
    catch (error) {
        console.error(`Error updating customer with id ${id} in database:`, error);
    }
    return result;
};
exports.update = update;
const remove = (id) => {
    let result = message.ERROR;
    try {
        console.log(`Removing customer with id ${id} from database`);
        result = message.SUCCESS;
    }
    catch (error) {
        console.error(`Error removing customer with id ${id} from database:`, error);
    }
    return result;
};
exports.remove = remove;
