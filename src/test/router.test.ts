import request from 'supertest'
import express from 'express'
import router from '../router/router'

const app = express()
app.use(express.json())
app.use('/', router)

describe('Customer API Routes', () => {
  test('POST - createCustomer (/)', async () => {
    const response = await request(app).post('/').send({})
    expect(response.status).toBe(201)
  })

  test('GET - getCustomer (/)', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })

  test('GET - getCustomerId (/?id=)', async () => {
    const response = await request(app).get('/?id=1')
    expect(response.status).toBe(200)
  })

  test('DELETE - deleteCustomer (/id)', async () => {
    const response = await request(app).delete('/1')
    expect(response.status).toBe(200)
  })

  test('PUT - addCreditCustomer (/credit)', async () => {
    const response = await request(app).put('/credit').send({ id: 1, amount: 100 })
    expect(response.status).toBe(200)
  })

  test.only('PUT - updateCustomer (/id)', async () => {
    const response = await request(app).put('/1').send({})
    expect(response.status).toBe(200)
  })
})