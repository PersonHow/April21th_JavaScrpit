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

let dataArr = [];

//RESTful API 目前的主流
//串接API或資料夾檔案的語法
// fetch = 非同步語法
fetch("./foodList.json")
    .then(function(response){

    // 從 JSON 格式轉回 JS物件
        return response.json()
    })
    .then(function(data){
        dataArr = [...data];
        console.log(dataArr)
    })
    .catch(function(error){
        //抓資料失敗 錯誤就會進來 catch
        //倘若成功就會是data 那行
        console.log(error)
    })

   
// fetch("https:")






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


// 
start.addEventListener('click', () =>{
   console.log(dataArr)
    

    if(noodle.checked){
        let random = Math.floor(Math.random() * noodleList.length)
        // if(noodleList[random].category.includes(noodle.value)){
        //     console.log(meilList[random]);
        // }
        console.log(noodleList[random].name)
        const name  = noodleList[random].name
        res.innerText = name;
        return;
    }

    if(rice.checked){
        let random = Math.floor(Math.random() * riceList.length)
        console.log(riceList[random].name)
        const name  = riceList[random].name
        res.innerText = name;
        return;
    }

    if(brunch.checked){
        let random = Math.floor(Math.random() * brunchList.length)
        console.log(brunchList[random].name)
        const name  = brunchList[random].name
        res.innerText = name;
        return;
    }

    if(other.checked){
        let random = Math.floor(Math.random() * otherList.length)
        console.log(otherList[random].name)
        const name  = otherList[random].name
        res.innerText = name;
        return;
    }


     // for(let i =0 ; i < checkList.length; i++){
     //     if(checkList[i].checked){
     //         console.log("BOOM!")
     //         break; 
     //     }
     //     console.log("nothing");
     //     console.log(i);
     // }

})

