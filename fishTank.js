function fishTank(input) {

let length = Number(input[0]) / 10
let width = Number(input[1]) / 10
let hight = Number(input[2]) / 10
let percent = Number(input[3]) / 100
let volum = length * width * hight
let result = volum - volum * percent
console.log(result);

}
fishTank(["85", "75", "47", "17"])

/*
· литрите вода, които ще събира аквариума.
*/