import type { UserInfo } from "@/types"

export const userService = {
    register
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