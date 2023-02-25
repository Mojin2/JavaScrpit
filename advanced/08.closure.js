//어휘적 환경
//전역 Lexical환경
//내부 Lexical환경들이 전역환경을 참조

//Closure
//함수와 렉시컬 환경의 조합
//함수가 생성될 당시의 외부 변수를 기억
//생성도니 이후에도 계속 접근 가능

function makeCounter() {
  let num = 0; //은닉화

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
