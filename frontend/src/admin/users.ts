let userDiv = document.querySelector('.customers-details') as HTMLDivElement;
let deleteUser = document.querySelector(".delete-user") as HTMLDivElement
console.log(userDiv);



interface Users{
    Name:string,
    Email:string,
    Role:string,
    Id:string
}
let User:Users[]=[]
let UsersURL = "http://localhost:4004/auth/active"



function getUsers(){
    fetch(UsersURL)
    .then((response) => response.json())
    .then((data :Users[]) => {
        User = data
        console.log(User[0]);
        console.log(User[0].Id);
        
        showUser(User)
    }).catch(error => console.error(error.message));
}
getUsers();
function showUser(User:Users[]){
    User.forEach((a)=>{
        let HTML =`
        <div class="table">
        <ion-icon name="person-circle-outline"></ion-icon>
        <h3>${a.Name}</h3>
        <p>${a.Email}</p>
        <h4>${a.Role}</h4>
        <div class="delete-user">
        <ion-icon name="trash-outline"></ion-icon>
        </div>
        </div>`
        userDiv.innerHTML += HTML
    })
    
}

deleteUser?.addEventListener("click",(event)=>{
    event.preventDefault()

})