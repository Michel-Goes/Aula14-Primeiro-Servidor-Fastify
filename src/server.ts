import Fastify from "fastify"

const server = Fastify({
    logger: true
})

server.get('/home', (requisition, response) => {
    let messsage = "Criando o primeiro servidor Node.js com Fastify, com Typescript"
    return response.send(messsage)
})

server.listen({
    port: 3000
})