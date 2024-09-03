import { createServer } from 'http'
import app from './config/app.config'
import { AppDataSource } from './config/database.config'
import { DotenvConfig } from './config/env.config'

function listen() {
  const PORT = DotenvConfig.PORT
  const httpServer = createServer(app)
  httpServer.listen(PORT)
  console.log(`🚀 Server is listening on port ${DotenvConfig.PORT}`)
}
AppDataSource.initialize()
  .then(async () => {
    console.log(`🚀 Database successfully connected`)
    listen() // Start the server
  })
  .catch((err) => {
    console.log(`❌ Database connection failure - ${err?.message}`)
  })