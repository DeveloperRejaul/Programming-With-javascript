const Queue = require('./QueueImplemantation.js');
const queue = new Queue();

queue.enQueue('Item One');
queue.enQueue('Item Tow');
queue.enQueue('Item Three');
//
queue.deQueue();
//
queue.next();
//
queue.showQueue();

// Array Defult Funtionlity
const arr = [];
arr.push('Item One');
arr.push('Item Tow');
arr.push('Item Three');
//
arr.shift();

// Log
queue.Queue;
arr;
