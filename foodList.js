// food type
const noodle = document.querySelector("#noodle");
const rice = document.querySelector("#rice");
const brunch = document.querySelector("#brunch");
const other = document.querySelector("#other");


const checkList =[noodle, rice, brunch, other];

// start button
const start = document.querySelector("#btn");

// Response
const res = document.querySelector("#food");

// 飲食列表
const meilList =[
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鍋燒麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["other"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["other"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    }
];



// start.addEventListener('click', function(){
// const random = Math.floor(Math.random() * meilList.length);
// res.innerText = meilList[random].name;
// })
const noodleList = [];
const riceList = [];
const brunchList = [];
const otherList = [];


for(let i = 0 ; i < meilList.length; i++){

    if(meilList[i].category.includes(noodle.value)){
        noodleList.push(meilList[i]);
    }

    if(meilList[i].category.includes(rice.value)){
        riceList.push(meilList[i]);
    }

    if(meilList[i].category.includes(brunch.value)){
        brunchList.push(meilList[i]);
    }

    if(meilList[i].category.includes(other.value)){
        otherList.push(meilList[i]);
    }

}


function doubleCheck(){
for(let i = 0; i < checkList.length; i++){
    if(checkList[i].checked){
        return false;
    }
}
    return true;
}


let filterArr =[] 

function filter() {

 if(doubleCheck()){
    return;
 }

 checkList.forEach(i =>{
    if(i.checked){
        meilList.forEach(j =>{
            if(j.category.includes(i.value)){
                j.filter = true;
            }
        })
    }
 })

meilList = meilList.filter(i => i.filter);
const checkTest = Math.floor(Math.random() * meilList.length);
console.log(meilList[checkTest].name);
res.innerText = meilList[checkTest].name;
}

start.addEventListener('click', () =>{
   
// // 過濾
if(meilList.length !== 0){
    filter();
    }
    

//     if(noodle.checked){
//         let random = Math.floor(Math.random() * noodleList.length)
//         // if(noodleList[random].category.includes(noodle.value)){
//         //     console.log(meilList[random]);
//         // }
//         console.log(noodleList[random].name)
//         const name  = noodleList[random].name
//         res.innerText = name;
//         return;
//     }

//     if(rice.checked){
//         let random = Math.floor(Math.random() * riceList.length)
//         console.log(riceList[random].name)
//         const name  = riceList[random].name
//         res.innerText = name;
//         return;
//     }

//     if(brunch.checked){
//         let random = Math.floor(Math.random() * brunchList.length)
//         console.log(brunchList[random].name)
//         const name  = brunchList[random].name
//         res.innerText = name;
//         return;
//     }

//     if(other.checked){
//         let random = Math.floor(Math.random() * otherList.length)
//         console.log(otherList[random].name)
//         const name  = otherList[random].name
//         res.innerText = name;
//         return;
//     }


    const checkTest = Math.floor(Math.random() * meilList.length);
//     // const arr = [];
//     // arr.push(meilList[checkTest].name);
//     // console.log(arr);
    const name  = meilList[checkTest].name
    res.innerText = name;

//     // for(let i =0 ; i < checkList.length; i++){
//     //     if(checkList[i].checked){
//     //         console.log("BOOM!")
//     //         break; 
//     //     }
//     //     console.log("nothing");
//     //     console.log(i);
//     // }

})

