var openModalLogin = document.querySelector('.open-login')
var modalUser= document.querySelector('#modal-user')
function toggleModalUser(){
    modalUser.classList.toggle('hide')
}
openModalLogin.addEventListener('click',toggleModalUser)
modalUser.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModalUser()
    }

})
// search
let openModalSearch= document.querySelector(".open-search")
let modalSearch = document.querySelector("#modal-search")
function toggleModalSearch(){
    modalSearch.classList.toggle('hide-search')
}
openModalSearch.addEventListener('click',toggleModalSearch)
modalSearch.addEventListener('click',function(e){
    if(e.target==e.currentTarget){
        toggleModalSearch()
    }
})