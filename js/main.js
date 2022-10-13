let apiUser="http://localhost:3000/courses";
function login(){
   getUser(hanldeLogin);
}
function getUser(callback){
    fetch(apiUser).then(function(res)
    {
        return res.json().then(callback);

    })
}
function hanldeLogin(data){
    let username =document.getElementById('user-name').value;
    let password =document.getElementById('password').value;
    data.forEach(data => {
        if(data.username == username && data.password== password){
            alert("dang nhap thanh cong");
        }     });

}

