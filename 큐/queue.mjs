import { DoublyLinkedList } from "../연결리스트/double연결리스트.mjs";

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    enqueue(data) {
        this.list.insertAt(0, data);
    }

    dequeue() {
        try {
            return this.list.deleteLast();
        } catch (e) {
            return null;
        }
    }

    front() {
        return this.list.tail;
    }
    isEmpty() {
        return this.list.count == 0;
    }
}
export { Queue };
