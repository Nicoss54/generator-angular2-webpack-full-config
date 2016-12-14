const hapi = require('hapi');
const path = require('path');
const server = new hapi.Server();


server.connection({
    host: '127.0.0.1',
    port: '3000',
    routes:{
        cors:true
    },
});

server.register(require('inert'), (err)=>{
    if(err){
        throw err;
    }

    server.route({
    method: 'GET',
    path:'/{param*}',
    handler:{
        directory:{
            path: path.join(__dirname, 'dist'),
            index: true
        }
    }
});

server.start((err)=>{
    if(err){
        throw err
    }
    console.log(`\nServer is running at ${server.info.uri}`);
});

});