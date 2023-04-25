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


let sourceData = [];

let newOrderList =[]; 

//RESTful API 目前的主流
//串接API或資料夾檔案的語法
// fetch = 非同步語法
fetch("./foodList.json")
    .then(function(response){

    // 從 JSON 格式轉回 JS物件
        return response.json()
    })
    .then(function(data){
        sourceData = [...data];
        // console.log(dataArr)
    })
    .catch(function(error){
        //抓資料失敗 錯誤就會進來 catch
        //倘若成功就會是data 那行
        console.log(error)
    })

   
// fetch("https:")

// console.log(dataArr)

function doubleCheck(){
for(let i = 0; i < checkList.length; i++){
    if(checkList[i].checked){
        console.log(checkList[i])
        return false;
    }
}
    console.log("50")
    return true;
}




function filter() {
    newOrderList = JSON.parse(JSON.stringify(sourceData));

    if(doubleCheck()){
    return;
    }

    checkList.forEach(i =>{
        console.log("65")
        if(i.checked){
            newOrderList.forEach(n =>{
                console.log("68")
                if(n.category.includes(i.value)){
                    console.log("70")
                    n.filter = true;
                }
            })
        }
    })

    newOrderList = newOrderList.filter(i => i.filter);
    console.log(newOrderList)
// const checkTest = Math.floor(Math.random() * newOrderList.length);
// console.log(newOrderList[checkTest].name);
// res.innerText = newOrderList[checkTest].name;
}


function randomModel(){
    const checkTest = Math.floor(Math.random() * sourceData.length);
    if(newOrderList.length === 0){
        console.log("~~~")
        return;
        }
        const name  = sourceData[checkTest].name
        console.log(name)
        res.innerText = name;

}
start.addEventListener('click', () =>{
    // doubleCheck();
//    console.log(dataArr) 
    // console.log("這邊很重要")
    // setTimeout(() =>{
        filter();
        randomModel();
    // }, 500)
    


    

    

})

