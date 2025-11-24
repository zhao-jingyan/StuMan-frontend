<script setup>

import { computed, ref } from 'vue';
import router from '@/router/router';
import SheetLayout from '@/layouts/SheetLayout.vue';

const signUpInfo = ref({
    name: '',
    id: '',
    password: '',
})

const onSubmit = () => {
    /* a console test logic */
    console.log('----------------------')
    console.log('submit!');
    console.log('name:' + signUpInfo.value.name)
    console.log('id:' + signUpInfo.value.id)
    console.log('password:' + signUpInfo.value.password)
    console.log('----------------------')

    // userService.register(signUpInfo)
    router.push('/login')
}

const onLogin = () => {
    router.push('/login')
}

const disableSubmit = computed(() => {
    return !(signUpInfo.value.id && signUpInfo.value.name && signUpInfo.value.password)
})

</script>

<template>
    <sheet-layout>
        <a-form :model="signUpInfo" style="width: 60%;">
            <h1 class="title">Create Account</h1>
            <p class="label">Name:</p>
            <a-form-item required>
                <a-input v-model:value="signUpInfo.name" autofocus placeholder="Real Name" size="large" />
            </a-form-item>
            <p class="label">ID:</p>
            <a-form-item required>
                <a-input v-model:value="signUpInfo.id" placeholder="Student/Teacher ID" size="large" />
            </a-form-item>
            <p class="label">Password:</p>
            <a-form-item required>
                <a-input-password v-model:value="signUpInfo.password" placeholder="Password" size="large" />
            </a-form-item>
            <a-form-item>
                <a-button style="width:100%; margin-top:10px; margin-bottom: 15px;" type="primary" @click="onSubmit"
                    :disabled="disableSubmit" size="large">
                    <p style="font-weight: 600;">Create</p>
                </a-button>
                <a-button style="width:100%; " @click="onLogin" size="large">
                    <p style="font-weight: 600;">
                        Back to Login
                    </p>
                </a-button>
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
</style>