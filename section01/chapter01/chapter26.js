//1. Spread 연산자
let array1 = [1, 2, 3, 4, 5]
let array2 = [10, ...array1, 20, 30]
//얕은복사
let array3 = array1;
//깊은복사
let array4 = [...array1]

//console.log(array4 === array1);

//2. 객체 (Spread 연산자 활용)
let obj1 = {
 a: 1,
 b: 2,
};
let obj2 = {
  k: 10,
  ...obj1,
  c: 4,
  d: 5
}
//console.log(obj2);

//3. 구조분해할당, 스프레드 연산자
function funcA([p1, p2, p3]) {
  console.log(p1+10, p2*10, p3/10);
}
const array5 = [1, 2, 3]
funcA(array5);

//3-1. 스프레드 연산자
function funcB(p1, p2, p3) {
  console.log(p1+10, p2*10, p3/10);
}
const array6 = [1, 2, 3]
funcB(...array6);

//Rset 매개변수
const array7 = [11, 12, 13]
function funcC(p1, ...rest) {
  console.log(p1)
  console.log(rest)
}
funcC(...array7);