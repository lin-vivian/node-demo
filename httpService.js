var http = require('http') //创建服务器，启动服务器并侦听8888端口
var url = require('url')  //处理浏览器url

function start (route, handle) {
    console.log(route)
    http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname
        console.log('Request for' + pathname + 'received.')
        route(handle, pathname, req, res) //路由处理，根据不同的路由，选择不同的请求处理程序
    }).listen(8888)

    console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start