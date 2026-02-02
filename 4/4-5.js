const user ={
    profile:{
        email:'test@test.com'
    }
}

const email =user?.profile?.email??'이메일  none'

console.log(email)