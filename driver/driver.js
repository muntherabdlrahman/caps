'use strict';

const events=require('../events');

events.on('pickItUp',pickItUp);

function pickItUp(payload){
setTimeout(()=>{
    console.log(`The driver should pick up the order number ${payload.orderId}`);
    events.emit('in-transit',payload);

},1000)

setTimeout(()=>{
    console.log(`the order number ${payload.orderId} is delivered `);
    events.emit('delivered',payload);

},3000)
}

module.exports={pickItUp};
