const routes = require('./start/routes')

const express = require('express')
const cors = require('cors')

const PORT = 3001

const app = express()
app.use(express.urlencoded({limit:'1mb',extended:true}))
app.use(express.json())
app.use(cors())

routes(app)
app.listen(PORT,( () => console.log(`BACKEND SERVER STARTED AT PORT ${PORT}`)))
