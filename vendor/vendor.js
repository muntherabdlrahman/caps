'use strict';

const events=require('../events');

var faker=require('faker');
// const { address, time } = require('faker');


const shopName=process.env.SWEETSHOP||'SWEETSHOP';
events.on('delivered',receivedTheOrder);

function receivedTheOrder(payload){
    console.log(`The order number ${payload.orderId} is in progress , welcome to serve you in the future again`);

};


setInterval(()=>{
    let order={
        store:shopName,
        orderId: faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
        time:faker.datatype.datetime()


    }
    events.emit('pickItUp',order);
    console.log(faker.datatype.uuid())

},5000);

module.exports={receivedTheOrder};


