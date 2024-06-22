const userName = document.getElementById('username')
const addUserBtn = document.getElementById('adduser')
let array = []
addUserBtn.onclick=()=>{
    const user = userName.value
    // console.log(user)
    array.push({'user':user})
    save(user)
}

const save = (user)=>{
// console.log(user)
const str = JSON.stringify('user')
// console.log(str)
localStorage.setItem('user',str)
displayData()
}

function displayData() {
    let Data = ''
    userArray.forEach((item, i) => {
        console.log(i)
    })
   
}


