import { DoublyLinkedList } from "../연결리스트/double연결리스트.mjs";

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    printAll() {
        this.list.printAll();
    }
    addFirst(Data) {
        this.list.insertAt(0, Data);
    }
    removeFirst() {
        return this.list.deleteAt(0);
    }
    addLast(data) {
        this.list.insertAt(this.list.count, data);
    }
    removeLast() {
        return this.list.deleteLast();
    }
    isEmpty() {
        return this.list.limit == 0;
    }
}
export { Deque };
