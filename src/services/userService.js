export const userService = {
    register,
    login,
    editProfile,
    _delete,
    logout,
    newClass,
    deleteStudent
}

async function login(info) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    };

    const response = await fetch(`https://mockurl:4000/users/authenticate`, requestOptions)
    return handleResponse(response);
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const response = await fetch(`https://mockurl:4000/users/register`, requestOptions);
    return handleResponse(response);
}

async function editProfile(user) {

}

async function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(), //和登录状态相关
        body: JSON.stringify(id)
    }

    const response = await fetch(`https://mockurl:4000/users/${id}`,requestOptions);
    return handleResponse(response);
}

async function newClass() {
    const requestOptions = {
        method: 'POST',
        headers:authHeader()
    }

    const response = await fetch(`https://mockurl:4000/classes/new`,requestOptions);
    return handleResponse(response);
}

async function deleteStudent(studentId) {
    return null;
}


async function logout(){

}

function handleResponse(response) {
    //check response, if fail, redirect to login / signup
    console.log("handling response")
}

function authHeader(){
    //真实场景应当是令牌
    return { 'Content-Type': 'application/json' }
}