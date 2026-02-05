const loadUserData = async () =>  {

    console.log( "사용자 데이터 불러오는 중...")

    return new Promise((resolve) => {
        setTimeout(resolve,1500)
    }).then(() =>{
        console.log("불러오기 완료")
    })
}


loadUserData();