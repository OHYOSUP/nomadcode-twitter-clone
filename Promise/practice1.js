function job1() {
  return new Promise(function (resolve,reject) {
    setTimeout(function () {
      reject("data fail");
    }, 2000);
  });
}
function job2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("data resolved!");
    }, 3000);
  });
}
job1().then(function(data){
console.log(data);
return job2();
})
.catch(function(reason){
console.log(reason);
return Promise.reject();
})
.then(function(data2){
  console.log(data2);
  })