let arr = [1,2,3,4444,5,6];
console.log(arr[3]);



const person = {
    name:"John",
    age:23,
    tel:[
        222222222,
        0999999999,
        0456565656,
        "0988-555-666"
    ],
    email:[
    "dfsdfsf@dfafa.com",
    "dfsdfsf@dfafa1.com",
    "dfsdfsf@dfafa2.com",
    ],
    address:"asdfa",
    pet:[
        {
            name:"bade",
            age:5
        },{
            name:"yalu",
            age:3
        }
    ]
    
}

console.log(person);

// 會用但是不常用
console.log(person["age"]);
// 另一種方式
console.log(person.age);
// =============================
console.log("---e-mail---")
console.log(person.email[2]);
console.log(person.email);

person.email.forEach(function(i){
    console.log(i);
})

// =============================
console.log("---電話---")
console.log(person.tel[3]);
console.log(person.tel[0]);

// =============================
console.log("---寵物名稱---")
console.log(person.pet[0].name);
person.pet.forEach(function(i){
    console.log(i.name);
})