var service = require('./httpService')  //服务器
var router = require('./router')  //路由

var {
    auth
} = require('./requestHandlers') //请求处理程序的集合

//路由和请求处理程序关联
var handle = {}
handle['/'] = auth.login
handle['/login'] = auth.login
handle['/user'] = auth.user

service.start(router.route, handle)
