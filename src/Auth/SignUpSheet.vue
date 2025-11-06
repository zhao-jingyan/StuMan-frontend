<script lang="ts" setup>

import { UnwrapRef, reactive, computed, ref } from 'vue';
import type { UserInfo } from '@/types/index'
import { userService } from '@/services/userService';

/* 实例化info对象，设定为reactive*/
/* antd官网提供的 用法如此，使用unwrapref和reactive，需要再看一下 */
const signUpInfo: UnwrapRef<UserInfo> = reactive({
    role: 'Student',
    name: '',
    id: '',
    password: '',
    nickname: '',
    class: '',
})

const checkPassword = ref("");

const onSubmit = () => {
    /* a console test logic */
    console.log('----------------------')
    console.log('submit!');
    console.log('role:' + signUpInfo.role)
    console.log('name:' + signUpInfo.name)
    console.log('id:' + signUpInfo.id)
    console.log('password:' + signUpInfo.password)
    console.log('nickname:' + signUpInfo.nickname)
    console.log('class:' + signUpInfo.class)
    console.log('----------------------')

    userService.register(signUpInfo)
}

const disableSubmit = computed(() => {
    return !(signUpInfo.id && signUpInfo.name && signUpInfo.password && signUpInfo.password === checkPassword.value)
})

const visible = ref<boolean>(false)

const validateStatus = computed(() => signUpInfo.password == checkPassword.value ? 'success' : 'error');

</script>

<template>
    <a-form :model="signUpInfo">
        <a-form-item label="You are:">
            <a-radio-group v-model:value="signUpInfo.role">
                <a-radio value="Student">Student</a-radio>
                <a-radio value="Teacher">Teacher</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="Name:" required>
            <a-input v-model:value="signUpInfo.name" />
        </a-form-item>
        <a-form-item label="ID" required>
            <a-input v-model:value="signUpInfo.id" />
        </a-form-item>
        <a-form-item label="Password" required>
            <a-input-password v-model:value="signUpInfo.password" v-model:visible="visible" />
        </a-form-item>
        <!--维护一个变量进行二次检查，不影响数据模型-->
        <a-form-item label="Password check" :validate-status="validateStatus"
            :help="validateStatus == 'error' ? 'Passwords do not match!' : ''" required>
            <a-input-password v-model:value="checkPassword" v-model:visible="visible" />
        </a-form-item>
        <a-form-item v-if="signUpInfo.role == 'Student'" label="Nickname:">
            <a-input v-model:value="signUpInfo.nickname" />
        </a-form-item>
        <a-form-item v-if="signUpInfo.role == 'Student'" label="Class">
            <a-input v-model:value="signUpInfo.class" />
        </a-form-item>
        <!-- 偏移button，使其与表单输入列对齐-->
        <a-form-item style="text-align: right">
            <a-button role="primary" @click="onSubmit" :disabled="disableSubmit" >
                Sign Up
            </a-button>
        </a-form-item>
    </a-form>
</template>