// console.log(2 > 1); true
// console.log(2 >= 1);true
// console.log(2 < 1);true
// console.log(2 == 1);false
// console.log(2 != 1);true


// console.log("2" > 1); true
// console.log("02" > 1);true

console.log(null > 0); //false
console.log(null == 0);  //false
console.log(null >= 0); //true.   because here == and comparision >,<, <=, >= work differentry , 
            // here in comperision first nulll convert into 0 and then chek but in equality its work differently 

console.log(undefined == 0); // false 
console.log(undefined > 0);  // false 
console.log(undefined < 0);   /// false   comparision with undefined is alsya false 
console.log(null == undefined); // true but while using strict equality  === undefined only equal to itself 

//=== it also check data type if data type is different then it will return false

console.log("2" === 2);