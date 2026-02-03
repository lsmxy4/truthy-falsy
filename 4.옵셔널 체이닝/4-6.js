const response ={
    date:{
        items:[]
    }
}

const firstitmeName = response?.date?.items?.[0]??'아이템 없음'

console.log(firstitmeName)