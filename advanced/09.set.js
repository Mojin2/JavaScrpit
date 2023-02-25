//setTimeout():일정 시간이 지난 후 함수를 실행
function fn(arg) {
  console.log(arg);
}
const tId = setTimeout(fn, 3000, "arg");
clearTimeout(tId);
//0으로 시간을 줘도 바로 시작되는게 아니라 다른 라인 이후에 실행

//setInterval():일정 시간 간격으로 함수를 반복
const sId = setInterval(fn, 3000, "Mike");
clearInterval(sId);

let num = 0;

function showTime() {
  console.log(`실행한지 ${++num}초가 지났습니다.`);
  if (num > 4) {
    clearInterval(newId);
  }
}

const newId = setInterval(showTime, 1000);
