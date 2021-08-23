'use strict';


// const events = require('../events');


// let order = {
//     store: 'SWEETSHOP',
//     orderID: '146967e6-7a2d-401b-abc0-932ffdae2a39',
//     customer: 'Eileen Witting',
//     address: '801 McLaughlin View',
//     time:'2009-09-02T10:56:36.925Z'
// };



// describe('testing event handlers', () => {
//     let consoleSpy;

//     beforeAll(() => {
//         consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     });

//     it('pickup event Work', async () => {
//         events.emit('pickup', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });

//     it('in-transit event Work ', async () => {
//         events.emit('in-transit', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });

//     it('delivered event Work  ', async () => {
//         events.emit('delivered', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });


//     afterAll(() => {
//         consoleSpy.mockRestore();
//     });

// });


const caps = require('../caps');
const shopId = process.env.shop_ID || '1234';

let order = {
    store: 'SWEETSHOP',
    orderID: '146967e6-7a2d-401b-abc0-932ffdae2a39',
    customer: 'Eileen Witting',
    address: '801 McLaughlin View',
    time: '2009-09-02T10:56:36.925Z'
};

describe('testing event handlers', () => {
    let consoleSpy;

   beforeAll(() => {
       consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
     
   it('pickup Work', async () => {
       caps.emit('pickItUp', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

   it('in-transit  Work ', async () => {
        caps.emit('inTransit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

   it('delivered  Work  ', async () => {
     caps.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


   
    afterAll(async () => {
       consoleSpy.mockRestore();
     
     });

});