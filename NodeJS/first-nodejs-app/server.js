const express = require('express')

const app = express()

app.use((req, res) => {
    res.json({
        message: 'running success',
        status: 200
    })
})

module.exports = app