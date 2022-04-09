//Desturing in javascript

let a,b,c,d

[a, b]=[34,564]
console.log(a,b);

  [a, b, c, ...d] = [1,2,3,4,5,6,7,8,9, 10, 11, 12, 13]
// [a, b, ...d] = [10, 20, 30, 40, 50];
// [a, b, ...d] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a,b);

// // [a,b, ...rest]=[10,20,30,40,50]
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest)


({a,b,c, ...d}={a:34,b:345,c:67,d:45,e:34})
console.log(a,b,c,d);


let fruits=['Apple','Bananas','Mangoes'];
[a,b,c]=fruits;
console.log(a,b,c);


const laptop={
    model:"HP pavillion",
    age:"23 days",
    gender:"male",
    start: function () {
        console.log('started')
    }
}
 
const{model,age,gender} = laptop;
console.log(model,age,gender)
