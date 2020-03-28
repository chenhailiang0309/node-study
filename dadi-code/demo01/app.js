const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    res.write("<head><meta charset='UTF-8'></head>")
    
    console.log(req.url)

    if(req.url == '/favicon.ico'){
    	var userInfo = url.parse(req.url,true)
    	
    }

    res.end()
}).listen(3000,()=>{
	console.log('listen at 3000')
})