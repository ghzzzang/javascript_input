
// ** 공백을 기준으로 여러 글자(한줄) 입력받기 **

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//input은 배열 자료형으로 담기므로 각 글자에 접근하려면 인덱싱으로 접근

// index로 접근해서 변수에 저장 
// 두 숫자를 입력받을때 
let a = input[0];
let b = input[1];

const hap = a + b;
console.log(hap);

