let userDiv = document.querySelector('.customers-details') as HTMLDivElement;
let deleteUserbtn = document.querySelector(".delete-user") as HTMLDivElement
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
        <div class="table1">
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
let options = {
    method:'DELETE'
}
deleteUserbtn?.addEventListener("click",deleteUser)
function deleteUser(event:any){
    event.preventDefault()
    fetch(UsersURL + "/2fcd54c9-2783-48d4-958b-c20d9e674d48", options)
    .then((response) => response.json())
}