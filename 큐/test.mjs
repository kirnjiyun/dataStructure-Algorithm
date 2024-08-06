import { Queue } from "./queue.mjs";
let queue = new Queue();
console.log("enqueue 호출");
queue.enqueue(1);
queue.enqueue(675);
queue.enqueue(234);
queue.enqueue(5);
console.log(queue.front());
console.log("dequeue 호출");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`is Empty : ${queue.isEmpty()}`);
