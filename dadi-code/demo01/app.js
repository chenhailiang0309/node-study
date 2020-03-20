const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    res.write("<head><meta charset='UTF-8'></head>")
    res.write('你好 node.js')

    console.log(req.url)

    res.end()
}).listen(3000)