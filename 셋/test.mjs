import { HashSet } from "./set.mjs";

// Create a new HashSet instance
let hashSet = new HashSet();

// Add elements to the HashSet
hashSet.add(1);
hashSet.add(11);
hashSet.add(2);
hashSet.add(23);
hashSet.add(59);
hashSet.add(93);
hashSet.add(15);
hashSet.add(77);

// Check if elements are contained in the HashSet
console.log(`"1 is in the set: ${hashSet.isContain(1)}`); // true
console.log(`"11 is in the set: ${hashSet.isContain(11)}`); // true
console.log(`"2 is in the set: ${hashSet.isContain(2)}`); // true
console.log(`"23 is in the set: ${hashSet.isContain(23)}`); // true
console.log(`"59 is in the set: ${hashSet.isContain(59)}`); // true
console.log(`"93 is in the set: ${hashSet.isContain(93)}`); // true
console.log(`"15 is in the set: ${hashSet.isContain(15)}`); // true
console.log(`"77 is in the set: ${hashSet.isContain(77)}`); // true

// Remove an element from the HashSet
hashSet.remove(1);
console.log(`"1 is in the set after removal: ${hashSet.isContain(1)}`); // false

// Check if another element is still in the HashSet
console.log(`"11 is in the set after removal of 1: ${hashSet.isContain(11)}`); // true

// Print all elements in the HashSet
console.log("All elements in the set:");
hashSet.printAll();

// Check if the HashSet is empty
console.log(`Is the set empty?: ${hashSet.isEmpty()}`); // false

// Clear the HashSet
hashSet.clear();
console.log(`Is the set empty after clear?: ${hashSet.isEmpty()}`); // true
