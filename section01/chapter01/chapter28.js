/*
console.log(1)
setTimeout(() => {
  console.log(2)
}, 3000);
console.log(3)
*/

//함수 선언식
/*
function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
  console.log(`a + b = ${sum}`)
}, 3000);
}
task(10, 20);
*/

//함수 선언식 2
//1번방식 3초후에 이벤트 처리를 정의한 것이다
//이벤트 : 시간이 3초가 지나면 setTimeout (핸들러일, 시간이벤트)
//이벤트 처리일 (핸들러 함수 : 화살표함수)

function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
    console.log(sum);
}, 3000);
}
//task(10, 20);


//2번방식
//이벤트 : 시간이 3초가 지나면 setTimeout (핸들러일, 시간이벤트)
//이벤트 처리일 (핸들러 함수 : 화살표함수)

let callback =(a, b) => {
  let sum = a + b;
  console.log (`a + b = ${sum + 100}`);
}

function task1(a, b) {
  setTimeout(() => {
    callback(a, b);
}, 3000);
}
//task1(10, 20);


//3번방식
//이벤트 : 시간이 3초가 지나면 setTimeout (핸들러일, 시간이벤트)
//이벤트 처리일 (핸들러 함수 : 화살표함수)

function task2(a, b, callback) {
  setTimeout(() => {
    callback(a, b);
}, 3000);
}

//task2(10, 20, (a, b) => console.log(`a + b = ${a + b + 1000}`));


//1단계 음식을 주문하는 사람
//이벤트 : 음식을 주문하면, 3초후에
//핸들러 : 음식이 완성이 되서 나오는 것
function orderFood(food, callback) {
  console.log(`${food} 주문`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//orderFood("떡볶이", (food) => console.log(`${food} 완성`));

//1단계 음식을 맵게 요청하는 사람
function spicyFood(food, callback) {
  console.log(`${food} 맵게 요청`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//spicyFood("떡볶이", (food) => console.log(`매운 ${food} 완성`));

//1단계 음식을 냉동주문

function freezeFood(food, callback) {
  console.log(`${food} 냉동 요청`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//freezeFood("떡볶이", (food) => console.log(`냉동 ${food} 완성`));

//2단게 떡볶이 요청 후 -> 떡볶이 맵게 요청
/*
orderFood("떡볶이", (food) => {
  console.log(`${food} 완성`)
  spicyFood(food, (food) => console.log(`매운 ${food} 완성`))
});
*/

//3단계 떡볶이 요청 -> 떡볶이 맵게 요청 -> 떡볶이 냉동 요청
orderFood("떡볶이", (food) => {
  console.log(`${food} 완성`)
  spicyFood(food, (food) => {
    console.log(`매운 ${food} 완성`)
    freezeFood(food, (food) => console.log(`냉동 ${food} 완성`))
  })
});