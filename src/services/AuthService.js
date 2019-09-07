export default function isLoggedIn(){
    return localStorage.getItem('token') ? true : false
}