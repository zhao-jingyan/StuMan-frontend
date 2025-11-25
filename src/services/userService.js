import axios from 'axios'
import router from '@/router/router';

export const userService = {
    register,
    login,
    logout,
    newClass,
    deleteStudent
}

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

async function login(id, password) {

    const loginData = {
        id: id,
        password: password
    }

    try{
        const response = await api.post('/users/login', loginData);

        const data = response.data;

        if(data && data.success) {
            const token = data.token;
            localStorage.setItem('authToken', token);
        }
        else {
            alert("Id or password incorrect! Please retry!")
        }
    }
    catch(error){
        let errorMessage = 'unknown problem';
        
        if (error.response) {
            const status = error.response.status;
            
            if (status === 500) {
                errorMessage = 'Server Problem';
            }
            
        } else if (error.request) {
            errorMessage = 'Fail to connect to Server';
        }
        
        alert(`Failed: ${errorMessage}`);
    }

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

async function newClass() {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    }

    const response = await fetch(`https://mockurl:4000/classes/new`, requestOptions);
    return handleResponse(response);
}

async function deleteStudent(studentId) {
    return null;
}


function logout() {
    //localStorage.removeItem('authToken');
    router.push('/login');
}

function handleResponse(response) {
    //check response, if fail, redirect to login / signup
    console.log("handling response")
}

function authHeader() {
    //真实场景应当是令牌
    return { 'Content-Type': 'application/json' }
}