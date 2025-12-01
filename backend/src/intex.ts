import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Routes à implémenter
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Route de test simple
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Mokei API is running',
    timestamp: new Date().toISOString()
  })
})
