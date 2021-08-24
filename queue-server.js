'use strict';
const port = process.env.port || 8000;
const io = require('socket.io')(8000);
const faker = require('faker');
const shopSystem = io.of('/shopSystem') //localhost:3000/health-system


const msgQueue = {
    chores: {}
};

shopSystem.on('connection', (socket) => {
    console.log('Shop system is connected now =>1', socket.id);
    console.log('Shop system is connected now =>2', socket.id);



    socket.on('pickItUp', payload => {
        let result = {
            event: 'pickItUp',
            time: new Date().toLocaleString(),
            payload
        };
        // console.log('Event', result)
        console.log('payload',payload)

        shopSystem.emit('pickItUp', payload);
    });

    socket.on('inTransit', payload => {
        let result = {
            event: 'inTransit',
            time: new Date().toLocaleString(),
            payload
        };
        console.log('Event', result);
        console.log('payload',payload)

        shopSystem.emit("inTransit", payload);
    });

    socket.on('delivered', payload => {
        let result = {
            event: 'delivered',
            time: new Date().toLocaleString(),
            payload
        };
        console.log('Event', result);
        console.log('payload',payload)
        shopSystem.emit('delivered', payload);

    });


    console.log('Shop system is connected now', socket.id);
    socket.on('new_chore', payload => {
        console.log("adding a new order ....")
        const id = faker.datatype.uuid();
        console.log("id= ", id);
        msgQueue.chores[id] = payload;
        socket.emit('added', payload);

        shopSystem.emit('chore', { id: id, payload:msgQueue.event, payload: msgQueue.chores[id] });
        console.log("after add msgQueue ========> ", msgQueue);
        console.log('payload',payload)


    });


    socket.on('get_all', () => {
        console.log("get_all : driver wants to get its msgs ")
        Object.keys(msgQueue.chores).forEach(id => {
            socket.emit('chore', { id: id, payload:msgQueue.event, payload: msgQueue.chores[id]})
        });
    });

    socket.on('received', msg => {
        console.log("received on queue will remove it ...")
        // he child confirmed receiving , remove from queue
        delete msgQueue.chores[msg.id]
        console.log("after delete msgQueue @@@@@@@@@@ ", msgQueue)
    })



});


