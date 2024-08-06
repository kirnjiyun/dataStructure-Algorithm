import { Deque } from "./deque.mjs";
let deque = new Deque();

console.log("addFirst");
console.log(`isEmpty:${deque.isEmpty()}`);
deque.addFirst(1);
deque.addFirst(1);
deque.addFirst(1);
deque.addFirst(1);
deque.addFirst(1);
deque.printAll();
console.log("remove");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log("마지막에 더하기");
for (let i = 1; i <= 7; i++) {
    deque.addLast(i);
}
deque.printAll();
console.log("=======removeLast");
deque.removeLast();
deque.printAll();
