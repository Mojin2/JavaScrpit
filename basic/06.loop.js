//for loop
for (let i = 0; i < 5; i++) {
  //console.log(i);
}

//while loop
let i = 0;
while (i < 5) {
  i++;
  //console.log(i);
}

//do..while loop
let i2 = 0;
do {
  i2++;
  //console.log(i2);
} while (i2 < 5);

//반복문 제어
//break : 반복문을 멈추고 빠져나옴
//continue : 멈추고 다음 반복으로 진행
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

//switch문
const price = 500;
switch (price) {
  case 500:
    console.log("pass");
    break;
  case 400:
    console.log("fail");
    break;
  default:
    console.log("None");
}
