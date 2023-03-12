/**
 * @Title : Array Stack Implemantation // push And pop
 * Rouls : je Last e Dokbe Se Fast e Bahir Hube
 */

class Stack {
  #front = 0; //Private Field
  constructor() {
    this.Stack = new Array();
  }
  push(items) {
    this.Stack[this.#front++] = items;
  }
  pop() {
    this.Stack[--this.Stack.length];
  }
}

const stack = new Stack();

// log
stack.push('Items 01');
stack.push('Items 02');
stack.push('Items 03');
stack.push('Items 04');
stack.push('Items 05');
//
stack.pop();
stack.pop();
stack.pop();
//
stack.Stack;
