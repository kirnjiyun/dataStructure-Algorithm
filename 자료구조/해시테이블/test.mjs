import { HashTable } from "./hashTable.mjs";
let hashTable = new HashTable();
hashTable.set(1, "유니");
hashTable.set(11, "투투");
hashTable.set(2, "쀼쀼");
hashTable.set(23, "크크");
hashTable.set(59, "하하");
hashTable.set(93, "로하");
hashTable.set(15, "바먀");
hashTable.set(77, "루루");

console.log(`"1번", ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`"1번", ${hashTable.get(1)}`);
console.log(`"11번", ${hashTable.get(11)}`);
