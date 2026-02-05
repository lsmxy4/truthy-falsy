const fetchData = async () => {

    console.log('데이터 요청중')

    return new Promise((resolve) => {
        setTimeout(resolve,3000)
    }).then(() =>{
        console.log('데이터 요청 완료')
    })
}

fetchData().then(() => {
    console.log('fetchData종료')
})