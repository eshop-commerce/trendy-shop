interface Users{
    Name:string,
    Email:string,
    Role:string
}
let User:Users[]=[]
function getUsers(){
    fetch("http://localhost:4004/users")
    .then((response) => response.json())
    .then((data :Users[]) => {
        User = data
        // showUser(User)
    }).catch(error => console.error(error.message));
}