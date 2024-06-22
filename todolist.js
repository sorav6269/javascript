const usernameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('adduser')
const recordsDisplay = document.getElementById('records')

// get data
let userArray = []

// get data localstorage
let objstr = localStorage.getItem('users')
// console.log(objstr)
if(objstr != null)
    {
        userArray = JSON.parse(objstr)  // string to object
        console.log(userArray)
    }
addUserBtn.onclick =()=> {
    const name = usernameTextField.Value
    // alert(name)
    userArray.push({ 'name': name })
    // console.log(useArray)
    saveData(userArray)
}

function saveData(userArray) {
    // console.log(userArray)
    let str = JSON.stringify(userArray)
    // console.log(str)
    localStorage.setItem('users', str)
    displayData()
}

function displayData() {
    let data = ''
    userArray.forEach((item, i) => {
        data +=`<tr>
        <th>${i+1}</th>
        <th>${item.name}</th>
        <td>
        <i class ="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i>
        <i class ="btn  btn-danger text-white fa fa-trash " onclick='DeleteInfo(${i})'></i>
        </td>
        </tr>`
        // console.log(data)
    })

    recordsDisplay.innerHTML= data
   
}

