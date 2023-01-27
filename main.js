const http = reuire('http')
const app = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}); 
    if(req.url === '/'){
        res.end("여기는 루트입니다")
    }else if(req.url === "/login"){
        res.end("login 서버입니다")
    }
})