//Simulacion como si fuese una base de datos, pero realmente aqui se deberia establecer conexiones a la BD
let message = {
  SUCCESS : {
    statusCode: 200,
    message: 'Success'
  },
  ERROR: {
    statusCode: 500,
    message: 'Error'
  }
}

export const create = (data: any) => {
  let result = message.ERROR
  try {
    console.log('Creating customer in database:', data)
    result = message.SUCCESS
  } catch (error) {
    console.error('Error creating customer in database:', error)
  }
  return result
}

export const creates = (data: any) => {
  let result = message.ERROR
  try {
    console.log('Creating customers in database:', data)
    result = message.SUCCESS
  } catch (error) {
    console.error('Error creating customers in database:', error)
  }
  return result
}

export const read = (filters: any) => {
  let result = message.ERROR
  try {
    console.log('Reading customers from database with filters:', filters)
    result = message.SUCCESS
  } catch (error) {
    console.error('Error reading customers from database:', error)
  }
  return result
}

export const update = (id: any, data: any) => {
  let result = message.ERROR
  try {
    console.log(`Updating customer with id ${id} in database with data:`, data)
    result = message.SUCCESS
  } catch (error) {
    console.error(`Error updating customer with id ${id} in database:`, error)
  }
  return result
}

export const remove = (id: any) => {
  let result = message.ERROR
  try {
    console.log(`Removing customer with id ${id} from database`)
    result = message.SUCCESS
  } catch (error) {
    console.error(`Error removing customer with id ${id} from database:`, error)
  }
  return result
}