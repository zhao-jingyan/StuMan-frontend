<script lang="ts" setup>

import { UnwrapRef, reactive, computed} from 'vue';

import type { LoginInfo } from '@/types/index'
import { userService } from '@/services/userService'

/* 实例化info对象，设定为reactive*/
/* antd官网提供的 用法如此，使用unwrapref和reactive，需要再看一下 */
const loginInfo: UnwrapRef<LoginInfo> = reactive({
    id: '',
    type: 'Student',
    password: '',
})

const onSubmit = () => {
    /* a console test logic */
    console.log('----------------------');
    console.log('submit!');
    console.log('id:' + loginInfo.id);
    console.log('type:' + loginInfo.type);
    console.log('password:' + loginInfo.password);
    console.log('----------------------');

    userService.login(loginInfo);
}

const disableSubmit = computed (() => {
    return !(loginInfo.id && loginInfo.password)
})

</script>

<template>
    <a-form :model="loginInfo">
        <a-form-item label="You are:">
            <a-radio-group v-model:value="loginInfo.type">
                <a-radio value="Student">Student</a-radio>
                <a-radio value="Teacher">Teacher</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="ID">
            <a-input v-model:value="loginInfo.id" />
        </a-form-item>
        <a-form-item label="Password">
            <a-input-password v-model:value="loginInfo.password" />
        </a-form-item>
        <!-- 偏移button，使其与表单输入列对齐-->
        <a-form-item >
            <a-button type="primary" @click="onSubmit" :disabled="disableSubmit">Login</a-button>
        </a-form-item>
    </a-form>
</template>