const fs = require('fs')
const url = require('url')
const user = require('./results')

const handleRequest = (filePath, res) => {
    fs.readFile(filePath, null, (err, data) => {
        if (err) {
            res.end('file not found, or something wrong')
        } else {
            res.end(data)
        }
    })
}

const routing = (req, res) => {
    const path = url.parse(req.url).pathname

    switch (path) {
        case '/':
            handleRequest('./index.html', res)
            break
        case '/user':

            res.end(`user page ${user.name('Mohamed', 'EL YONOUSI')}, ${user.age(5, 3, 1996)} years old`)
            break
        default:
            res.end(`error, page ${path} not found`)
            break
    }
}

module.exports = routing