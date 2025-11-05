import type { UserInfo, LoginInfo} from "@/types"

export const userService = {
    register,
    login
}

async function login(info : LoginInfo){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    };

    const response = await fetch (`https://mockurl:4000/users/authenticate`,requestOptions)
    return handleResponse(response);
}




async function register(user : UserInfo) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const response = await fetch(`https://mockurl:4000/users/register`, requestOptions);
    return handleResponse(response);
}

function handleResponse(response) {
    //check response, if fail, redirect to login / signup
    console.log("handling response")
}