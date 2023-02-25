//generator : 함수의 실행을 중간에 멈췄다가 재개 기능

function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}

const a = fn();
//a.next() : 다음 yield를 실행
//a.return() : value: END, done: true

//Generator
//Iterable
//Symbol.iterator 매서드가 있음
//Symbol.iterator 는 interator를 반환

//Iterator
//next 매서드를 가짐
//next 매서드는 value와 done속성을 가진 객체를 반환
//작업이 끝나면 done은 true가 됨

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
