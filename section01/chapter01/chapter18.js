// 방법1
function returnFalse() {
console.log("Fasle 함수");
return false;
}
function returnTrue() {
console.log("True 함수");
return true;
}
console.log(returnTrue()|| returnFalse());

// 방법2
function returnFalse() {
console.log("Fasle 함수");
return undefined;
}
function returnTrue() {
console.log("True 함수");
return 10;
}
console.log(returnFalse() && returnTrue());

//단락평가테스팅
//함수선언문(호이스팅)
function printName(person) {
  const name = person && person.name; 
  console.log(name || "person 객체가 없음."); 
}

printName({name:"홍길동"});