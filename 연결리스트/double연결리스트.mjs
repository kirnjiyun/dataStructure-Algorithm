class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    printAll() {
        let currentNode = this.head;
        let text = "[";
        while (currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;
            if (currentNode != null) {
                text += ",";
            }
        }
        text += "]";
        console.log(text);
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위 넘어감");
        }
        let newNode = new Node(data);
        if (index == 0) {
            newNode.next = this.head;
            if (this.head != null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
            if (this.count === 0) {
                this.tail = newNode;
            }
        } else if (index == this.count) {
            newNode.next = null;
            newNode.prev = this.tail;
            if (this.tail != null) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            if (currentNode.next != null) {
                currentNode.next.prev = newNode;
            }
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위 넘어감");
        }
        let deletedNode = null;
        if (index == 0) {
            deletedNode = this.head;
            if (this.head.next == null) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index == this.count - 1) {
            deletedNode = this.tail;
            this.tail = this.tail.prev;
            if (this.tail != null) {
                this.tail.next = null;
            }
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            if (currentNode.next != null) {
                currentNode.next.prev = currentNode;
            }
        }
        this.count--;
        return deletedNode;
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
}

export { Node, DoublyLinkedList };
