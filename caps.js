'use strict';

// const { Socket } = require('socket.io-client');
// const events=require('./events');
// require('./driver/driver');
// require('./vendor/vendor');

// events.on('pickItUp',pickItUp);
// events.on('in-transit',inTransit);
// events.on('delivered',delivered);

const port = process.env.port || 8000;
const io = require('socket.io')(port);
const shopSystem = io.of('/shopSystem') //localhost:3000/health-system


io.on('connection', (socket) => {
  console.log("Welcome to Global Connection ! ", socket.id);

});


shopSystem.on('connection', (socket) => {
  console.log('Shop system is connected now', socket.id);


  socket.on('join', room => {
    socket.join(room);
  })



  socket.on('pickItUp', payload => {
    let result = {
      event: 'pickItUp',
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log('Event', result)
    shopSystem.emit('pickItUp', payload);
  });

  socket.on('inTransit', payload => {
    let result = {
      event: 'inTransit',
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log('Event', result);
    shopSystem.emit("inTransit", payload);
  });

  socket.on('delivered', payload => {
    let result = {
      event: 'delivered',
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log('Event', result);
    shopSystem.emit('delivered', payload);

  });



})




module.exports = shopSystem;