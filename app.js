//for
/*let i;
for(i=0; i<10; i++ ){
    console.log("hello world");
}
let i_1;
for(i=0; i<100; i++){
    console.log("good bye");
}*/


// foreach
//let arr = ["one","two","three"];
//console.log(arr[1]);

//arr.forEach(key => {
   // console.log(key);   
//});
//console.table(arr);

let dec =document.querySelector(".dec");
let result =document.querySelector(".result");
let inc =document.querySelector(".inc");

inc.addEventListener("click", function(){

   // 1 = 1 + 1
result.value = Number(result.value) +1;

if(result.value < 5){
    result.value = Number(result.value) +1;
    //console.log(result);
}else{
   inc.style.cursor = 'not-allowed'
}

console.log(result);


});