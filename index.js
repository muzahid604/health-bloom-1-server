const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors');



app.get('/', (req, res) => {
    res.send('Health bloom is worked')
})

app.listen(port, () => {
    console.log('port work')
})