'use strict';

// const port = process.env.PORT||8000;
// const io=require('socket.io-client');
// let host='http://localhost:8000';
// const socket = io.connect(`${host}/shopSystem`);
// var faker=require('faker');
// const shopName=process.env.SWEETSHOP||'SWEETSHOP';
// const shopId =process.env.shop_ID||'1234';

// socket.emit('join',shopName );

// socket.on('delivered',receivedTheOrder);

// function receivedTheOrder(payload){
//     console.log(`The order number ${payload.orderId} is in progress , welcome to serve you in the future again`);

// };


// setInterval(()=>{
//     let order={
//         store:shopName,
//         orderId: faker.datatype.uuid(),
//         customer:faker.name.findName(),
//         address:faker.address.streetAddress(),
//         time:faker.datatype.datetime()


//     }
//     socket.emit('pickItUp',order);

// },5000);

// module.exports={receivedTheOrder};

const client=require('socket.io-client');
const host = "http://localhost:8000/shopSystem";
const socket = client.connect(host);
var faker=require('faker');
// const shopName=process.env.SWEETSHOP||'SWEETSHOP';
// const shopId =process.env.shop_ID||'1234';

setInterval(()=>{
    let payload={
        store:process.env.SHOP_NAME,
        orderId: faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
        time:faker.datatype.datetime()


    }
    socket.emit('pickItUp',payload);
    socket.emit('new_chore',payload);

},5000);

socket.on('delivered',payload=>{
    console.log(`The order number ${payload.payloadId} is in progress , welcome to serve you in the future again`);
})


