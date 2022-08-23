
// console.log(1);
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function(response){
//     // response.json().then(function(data){
//     //   console.log('data',data);
//     // }))
//     return response.json();
//   })
//   .catch(function(reason){
//     console.log('reason', reason);
//   })
// .then(function(data){
//       console.log('data',data);

// })
// console.log(2);


let fetched =  fetch('https://jsonplaceholder.typicode.com/posts')
console.log(fetched);
fetched.then(function(response){
  // response.json().then(function(data){
  //   console.log(data)
  // })
  return response.json();
});
fetched.catch(function(reason){
console.log(reason);
})
.then(function(data){
    console.log(data)
})
// 값을 Promise로 받는 데 이런 함수는 비동기로 동작할 확률이 매우 높음
// 두개의 함수를 사용할 수 있다.
// then(function(result){
//함수 값 도출에 성공했을 때
// })
//catch(function(reason){
//함수값 도출에 실패했을 때
// })

// *프로미스를 하는 이유 = 비동기적인 작업을 처리할 때, 그 작업이 성공했는지 실패했는지를 표준화된 방식을 이용해서 처리할 수 있도록 해준다.

