import Fastify from 'fastify'

const server = Fastify({
    logger: true
})

server.get('/home', (req, res) => {
    let message = "Esse é servidor Fastify com Node.js"
    return res.send(message)
})

server.listen({
    port: 4000
})