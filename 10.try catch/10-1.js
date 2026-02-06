function divide(a,b){
    try {
        if(b==0){
            throw new Error('0으로 나눌수 없음')
        }
        console.log(`결과 :`, a/b)
    } catch (error) {
        console.error(`에러 발생`,error.message)
    }finally{
        console.log(`연산시도 종료`)
    }
}

divide(10,2)