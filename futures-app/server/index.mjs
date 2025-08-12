import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Dummy futures data generator
function generateDummyFutures() {
  const now = new Date()
  const baseId = Math.random().toString(36).substring(2, 10).toUpperCase()
  return [
    {
      id: `${baseId}-A`,
      title: 'Two Step Challenge',
      tier: 'PRO',
      amount: 5000,
      status: 'On Challenge',
      balance: 6340,
      purchasedAt: '2025-03-20',
      evaluation: 1,
      masterAccount: false
    },
    {
      id: `${baseId}-B`,
      title: 'Two Step Challenge',
      tier: 'PRO',
      amount: 25000,
      status: 'Funded',
      balance: 6340,
      purchasedAt: '2025-03-20',
      evaluation: 1,
      masterAccount: true
    },
    {
      id: `${baseId}-C`,
      title: 'Two Step Challenge',
      tier: 'PRO',
      amount: 10000,
      status: 'Funded',
      balance: 6340,
      purchasedAt: '2025-03-20',
      evaluation: 2,
      masterAccount: true
    }
  ]
}

app.get('/api/futures', (_req, res) => {
  res.json({ accounts: generateDummyFutures() })
})

const port = process.env.PORT || 5174
app.listen(port, () => {
  console.log(`Mock API listening on http://localhost:${port}`)
})