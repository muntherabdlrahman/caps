'use strict';

const events=require('./events');
require('./driver/driver');
require('./vendor/vendor');

events.on('pickItUp',pickItUp);
events.on('in-transit',inTransit);
events.on('delivered',delivered);


function pickItUp(payload){
    let result={
        event:'pickItUp',
        time:new Date().toLocaleString(),
        payload:payload,
    };
    console.log('Event',result)
}
function inTransit(payload) {
    let result = {
      event : 'inTransit',
      time: new Date().toLocaleString(),
      payload : payload,
    };
    console.log('Event', result);
  }

function delivered(payload) {
    let result = {
      event : 'delivered',
      time: new Date().toLocaleString(),
      payload : payload,
    };
    console.log('Event', result);
}

module.exports={
    pickItUp,
    inTransit,
    delivered
};