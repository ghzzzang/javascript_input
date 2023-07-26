// ** 한 글자 입력받기 ** 

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = input;
//n에 입력값이 담긴다. 숫자라면 Number(input)를 사용한다. 