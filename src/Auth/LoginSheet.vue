<script lang="ts" setup>

import { ref , computed } from 'vue';
import router from '@/router/router';

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
    <div class="global-background">
        <div class="global-form-sheet">
            <a-form :model="loginInfo">
                <h1 class="title">Log in</h1>
                <a-form-item>
                    <p class="label">ID:</p>
                    <a-input v-model:value="loginInfo.id" />
                </a-form-item>
                <a-form-item>
                    <p class="label">Password:</p>
                    <a-input-password v-model:value="loginInfo.password" style="size: 150%;" />
                    <div style="margin-top: 10px;">
                    <a style="color:grey; text-decoration: underline; font-size: small;"
                        @click="onForgotPassword">
                        Forgot your passowrd?
                    </a>
                    </div>
                </a-form-item>
                <a-form-item style="margin-top : 50px">
                    <a-button style="width:100%; margin-bottom: 15px;" type="primary" @click="onSubmit"
                        :disabled="disableSubmit">
                        <p style="font-weight: 600;">Login</p>
                    </a-button>
                    <a-button style="width:100%; " @click="onSignup">
                        <p style="font-weight: 600;">
                            Sign Up
                        </p>
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
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
</style>