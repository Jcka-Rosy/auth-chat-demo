const getAuthUser = () => {
    return localStorage.getItem('AdminAccess');
} 
const methods = { 
    getAuthUser
}

export default methods;