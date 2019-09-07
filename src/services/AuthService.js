const isLoggedIn = () => {
    return localStorage.getItem('token') ? true : false
}

const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export {
    isLoggedIn,
    getLoggedInUser
}