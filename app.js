const ws = require('nodejs-websocket')
const prot = 3000

const server = ws.createServer(conn => {
    conn.on('text', str => {
        broadcast(str)
    })
    conn.on('error', err => {
        console.log(err)
    })
})

function broadcast(data) {
    server.connections.forEach((conn) => {
        conn.sendText(data)
    })
}

server.listen(prot)