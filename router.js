/**
 * 
 * 根据路由，选择不同的路由处理程序
 * 检查给定的路径对应的请求程序是否存在，若存在则调用对应请求程序处理请求
 * 
*/
function route (handle, pathname, req, res) {
    console.log('About to route a request for ' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not found')
        res.end()
    }
}

exports.route = route