// ** 여러 줄 입력받기 **

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근