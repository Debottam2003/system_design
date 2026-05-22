const EventEmitter = require('events');

// Broker
const broker = new EventEmitter();


// Subscriber 1 (server/service)
broker.on('order_created', (data) => {
    console.log('Inventory Service:', data);
});


// Subscriber 2 (server/service)
broker.on('order_created', (data) => {
    console.log('Email Service:', data);
});


// Publisher
function createOrder(order) {
    console.log('Order Created');

    // publish event
    broker.emit('order_created', order);
}


// Trigger
createOrder({
    id: 101,
    product: 'Laptop',
    user: 'Rahul'
});