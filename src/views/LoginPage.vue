<script setup>

import { ref, computed } from 'vue';
import router from '@/router/router';
import SheetLayout from '@/layouts/SheetLayout.vue';


const loginInfo = ref({
    id: '',
    password: '',
})

const onSubmit = () => {
    /* a console test logic */
    console.log('----------------------');
    console.log('submit!');
    console.log('id:' + loginInfo.value.id);
    console.log('password:' + loginInfo.value.password);
    console.log('----------------------');
}

const onSignup = () => {
    router.push('/signup')
}

const onForgotPassword = () => {

}

const disableSubmit = computed(() => {
    return !(loginInfo.value.id && loginInfo.value.password)
})


</script>

<template>
    <sheet-layout>
        <a-form :model="loginInfo" style="width: 60%;">
            <h1 class="title">Log in</h1>
            <a-form-item>
                <p class="label">ID:</p>
                <a-input v-model:value="loginInfo.id" autofocus placeholder="Student/Teacher ID" size="large" />
            </a-form-item>
            <a-form-item>
                <p class="label">Password:</p>
                <a-input-password v-model:value="loginInfo.password" style="size: 150%;" placeholder="Password"
                    size="large" />
            </a-form-item>
            <a-form-item style="margin-top : 40px">
                <a-button style="width:100%; margin-bottom: 15px;" type="primary" @click="onSubmit"
                    :disabled="disableSubmit" size="large">
                    <p style="font-weight: 600;">Log in</p>
                </a-button>
                <a-button style="width:100%; " @click="onSignup" size="large">
                    <p style="font-weight: 600;">
                        Create Account
                    </p>
                </a-button>
                <div style="text-align: center; margin-top: 10px;">
                    <a style="color:grey; text-decoration: underline; font-size: small; text-align: center;"
                        @click="onForgotPassword">
                        Forgot your password?
                    </a>
                </div>
            </a-form-item>
        </a-form>
    </sheet-layout>
</template>

<style scoped>
.title {
    text-align: center;
    font-size: 700;
    line-height: 5rem;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.label {
    line-height: 50%;
    font-size: medium;
    font-weight: 600;
}

.sheet {
    height: 600px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}
</style>