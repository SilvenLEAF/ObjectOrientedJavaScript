// Playing with SET
const mySet1 = new Set(`2323577`);
const mySet2 = new Set([3,5,6,6,3,4,2,6,5,]);

/*
  add(x) -------chainable
  delete(x) -------returns boolean
  clear() -------returns undefined
  size -------length
  has(x) -------boolean
*/

console.log(mySet1);
console.log(mySet2);



// Playing with MAP
const myMap = new Map();

console.log(myMap.set(4, 'number'));
console.log(myMap.set(false, 'boolean'));
console.log(myMap.has(4));
console.log(myMap.has('boolean'));
console.log(myMap.get(false));
console.log(myMap.keys(['a', 'b', 'c', 'd', 'e']));
console.log(myMap.size);
console.log(myMap);
console.log(myMap.clear());
console.log(myMap);