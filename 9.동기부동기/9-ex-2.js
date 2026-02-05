const fetchData = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("다운로드 완료")
    },3000)
})

console.log("다운로드 요청")

fetchData.then((msg) => console.log(msg))