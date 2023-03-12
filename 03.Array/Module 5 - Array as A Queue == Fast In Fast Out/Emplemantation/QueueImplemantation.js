/**
 * @Title : Queue Implemantation // Shift And Push Mathod
 */

// const MAX_SIZE = 30;

class MyQueue {
  constructor() {
    this.FRONT = 0;
    this.REAR = 0;
    this.Queue = new Array();
  }

  enQueue(items) {
    // if (this.Queue === MAX_SIZE) {
    //   console.log('Queue Is Full');
    //   return false;
    // }
    this.Queue[this.REAR++] = items;
  }
  deQueue() {
    if (this.FRONT === this.REAR) {
      console.log('Queue Is Empty');
      return;
    }

    const items = this.Queue[this.FRONT];
    for (let i = this.FRONT; i < this.REAR; i++) {
      this.Queue[i] = this.Queue[i + 1];
    }
    delete this.Queue[--this.REAR];
    return;
  }
  showQueue() {
    if (this.FRONT === this.REAR) {
      console.log('Queue Is Empty');
      return;
    }

    for (let i = 0; i < this.REAR; i++) {
      console.log(this.Queue[i]);
    }
  }

  next() {
    if (this.FRONT === this.REAR) {
      console.log('Queue Is Empty');
      return;
    }
    return this.Queue[this.FRONT];
  }
}
module.exports = MyQueue;
