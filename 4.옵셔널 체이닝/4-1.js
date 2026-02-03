const user = {
    profile:{
        email:'exam@exam.com'
    }
}

if (user && user.profile && user.profile.email) {
  console.log(user.profile.email);
}

console.log(user?.profile?.email);
