'use strict';
// const port = process.env.PORT||3000;
// const io = require('socket.io-client');
// let host = 'http://localhost:8000';
// const socket = io.connect(`${host}/shopSystem`);
// const shopName=process.env.SWEETSHOP||'SWEETSHOP';

// socket.emit('join',shopName );

// socket.on('pickItUp',pickItUp);

// function pickItUp(payload){
// setTimeout(()=>{
//     console.log(`The driver should pick up the order number ${payload.orderId}`);
//     socket.emit('in-transit',payload);

// },1000)

// setTimeout(()=>{
//     console.log(`the order number ${payload.orderId} is delivered `);
//     socket.emit('delivered',payload);

// },3000)
// }

// module.exports={pickItUp};

const client = require('socket.io-client');
let host = 'http://localhost:8000/shopSystem';
const socket = client.connect(host);
// const shopName=process.env.SWEETSHOP||'SWEETSHOP';



socket.emit('get_all');
socket.on('chore', msg => {
    console.log("driver got this msg: ", msg)
    socket.emit('received', msg)
});

socket.on ('pickItUp',payload=>{
setTimeout(()=>{
    console.log(`The driver should pick up the order number ${payload.orderId}`);
    socket.emit('in-transit',payload);

},1000)

setTimeout(()=>{
    console.log(`the order number ${payload.orderId} is delivered `);
    socket.emit('delivered',payload);

},3000)
})
