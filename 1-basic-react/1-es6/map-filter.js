

const arr = [10, 20, 30, 40, 50, 60];

function add() {
let sum =0;
console.log("start")
for(let i = 0; i <arr.length; i++){
    let num = arr[i]
    console.log(num + " and index =  " +  i)
    sum += num
}
console.log(sum)
console.log("end")
}

add();

let sum2 =0

let newArr = arr.map((element)=>{
sum2 += element;
})

console.log(newArr)
console.log(sum2)

// filter

let filterValue = arr.filter((element)=>{
    return element > 40;
})

console.log(filterValue)