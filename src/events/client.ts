import { customer } from '../models/customer'
import {
  create,
  read,
  update,
  remove
} from '../repositories/customerRepository'

let c: customer[] = []

export const createCustomer = (data: Omit<customer, 'id'>): customer => {
  try {
    const newCustomer = {
      id: 1, // No se partidiario de declarar el id quemado, es mas facil declararlo con un autoincrement en la BD, solo para pruebas lo queme
      ...data
    }
    const bd = create(newCustomer)
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return newCustomer
  } catch (error) {
    throw new Error('Error creating customer')
  }
}

export const getCustomer = (filters : Partial<customer>): customer[] => {
  try {
    const bd = read(filters) // Aqui se podrian agregar filtros de una busqyeda mas especifica
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return c
  } catch (error) {
    throw new Error('Error retrieving customers')
  }
}

export const getCustomerId = (id: number): customer | undefined => {
  try {
    const bd = read({ id })
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return c.find(c => c.id === id)
  } catch (error) {
    throw new Error('Error retrieving customer by ID')
  }
}

export const updateCustomer = (id: number, data: Partial<customer>): customer | undefined => {
  try {
    // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de mandar el update
    const customerSeacrh = read({ id })
    if (customerSeacrh.statusCode !== 200) {
      throw new Error('Customer not found')
    }

    const bd = update(id, data)
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return bd as unknown as customer
  } catch (error) {
    throw new Error('Error updating customer')
  }
}

export const deleteCustomer = (id: number): boolean => {
  try {
    // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de mandar al customer, de igual manera s epodria poner validacion para saber si realmente se puede eliminar
    const customerSeacrh = read({ id })
    if (customerSeacrh.statusCode !== 200) {
      throw new Error('Customer not found')
    }

    const bd = remove(id)
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return bd.statusCode === 200
  } catch (error) {
    throw new Error('Error deleting customer')
  }
}

export const addCreditCustomer = (id: number, amount: number): customer | undefined => {
  try {
    // en dado caso se podria ir a buscar el id, esto apra verificar que exista antes de cambiarle el monto al customer
    const customerSeacrh = read({ id })
    if (customerSeacrh.statusCode !== 200) {
      throw new Error('Customer not found')
    }

    const bd = update(id, { creditoDisponible: amount })
    if (bd.statusCode !== 200) {
      throw new Error('Database error')
    }
    return bd as unknown as customer
  } catch (error) {
    throw new Error('Error adding credit to customer')
  }
}