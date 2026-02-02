function greet(name){
    const userName = name ?? '익명'

    console.log(`안녕하세요 ${userName}님`)
}

greet('환')
greet()