function user (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('user')
    res.end()
}

exports.user = user