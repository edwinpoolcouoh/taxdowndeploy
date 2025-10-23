import { Router } from 'express'
import {
  createCustomer,
  getCustomer,
  getCustomerId,
  updateCustomer,
  deleteCustomer,
  addCreditCustomer
} from '../events/client'

const router = Router()

router.post('/', (req, res) => {
  const customer = createCustomer(req.body)
  res.status(201).json(customer)
})

router.get('/', (req, res) => {
  res.json(getCustomer(req.query))
})

router.get('/:id', (req, res) => {
  if(!req?.params?.id ||isNaN(Number(req.params.id))) return res.status(400).json({ error: 'Invalid ID' })
  const customer = getCustomerId(Number(req.params.id))
  if (!customer) return res.status(404).json({ error: 'Not found Client' })
  res.json(customer)
})

router.delete('/:id', (req, res) => {
  if(!req?.params?.id || isNaN(Number(req.params.id))) return res.status(400).json({ error: 'Invalid ID' })
  const deleted = deleteCustomer(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Not found Client' })
  res.json({ message: 'Deleted Customer' })
})

router.put('/credit', (req, res) => {
if (!req?.body?.id || isNaN(Number(req.body.id)) || !req?.body?.amount || isNaN(Number(req.body.amount))) {
    return res.status(400).json({ error: 'Invalid ID or Amount' })
  }
  const customer = addCreditCustomer(Number(req.body.id), req.body.amount)
  if (!customer) return res.status(404).json({ error: 'Not found Client' })
  res.json({message: 'Updated Credit Customer'})
})

router.put('/:id', (req, res) => {
  if(!req?.params?.id || isNaN(Number(req.params.id))) return res.status(400).json({ error: 'Invalid ID' })
  const customer = updateCustomer(Number(req.params.id), req.body)
  if (!customer) return res.status(404).json({ error: 'Not found Client' })
  res.json({message: 'Updated Customer'})
})

export default router