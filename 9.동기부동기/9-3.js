const fetchData = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('데이터 로그 완료')
    },3000)
})

console.log('데이터 로딩중')

fetchData.then((msg) => console.log(msg))