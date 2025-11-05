<script lang="ts" setup>

import { UnwrapRef, reactive, computed, ref} from 'vue';

/* 声明TS接口 */
interface signInfo {
    id: string;
    name: string;
    nickname: string;
    type: string;
    password: string;
    class: string;
}

/* 实例化info对象，设定为reactive*/
/* antd官网提供的 用法如此，使用unwrapref和reactive，需要再看一下 */
const signInfo: UnwrapRef<signInfo> = reactive({
    type: 'Student',
    name:'',
    id: '',
    password: '',
    nickname:'',
    class: '',
})

const checkPassword = ref("");

const onSubmit = () => {
    /* a console test logic */
    console.log('----------------------')
    console.log('submit!');
    console.log('type:' + signInfo.type)
    console.log('name:' + signInfo.name)
    console.log('id:' + signInfo.id)
    console.log('password:' + signInfo.password)
    console.log('nickname:' + signInfo.nickname)
    console.log('class:' + signInfo.class)
    console.log('----------------------')
}

const onFinish = () => {
    /* in real website, this maybe a redirect to index */
    console.log('Login Finished!')
}

const onFinishFailed = () => {
    /* in real website, this is an alert */
    console.log('Login Failed!')

}

const disableSubmit = computed(() => {
    return !(signInfo.id && signInfo.name && signInfo.password && signInfo.password === checkPassword.value)
})

const visible = ref<boolean>(false)

const validateStatus = computed(() => signInfo.password == checkPassword.value ? 'success' : 'error');

</script>

<template>
    <a-form :model="signInfo" 
            :label-col="{ span: 8 }" 
            :wrapper-col="{ span: 16 }" 
            @finish="onFinish"
            @finishFailed="onFinishFailed"
    >
    <a-form-item label="You are:">
        <a-radio-group v-model:value="signInfo.type">
            <a-radio value="Student">Student</a-radio>
            <a-radio value="Teacher">Teacher</a-radio>
        </a-radio-group>
    </a-form-item>
        <a-form-item label="Name:" required>
            <a-input v-model:value="signInfo.name" />
        </a-form-item>
        <a-form-item label="ID" required>
            <a-input v-model:value="signInfo.id" />
        </a-form-item>
        <a-form-item label="Password" required >
            <a-input-password v-model:value="signInfo.password" v-model:visible="visible"/>
        </a-form-item>
        <!--维护一个变量进行二次检查，不影响数据模型-->
        <a-form-item 
            label="Password check" 
            :validate-status="validateStatus"
            :help=" validateStatus == 'error' ? 'Passwords do not match!' : '' "
            required >
            <a-input-password v-model:value="checkPassword" v-model:visible="visible"/>
        </a-form-item>     
        <a-form-item v-if=" signInfo.type == 'Student' " label="Nickname:">
            <a-input v-model:value="signInfo.nickname" />
        </a-form-item>
        <a-form-item v-if=" signInfo.type == 'Student' " label="Class">
            <a-input v-model:value="signInfo.class" />
        </a-form-item>
        <!-- 偏移button，使其与表单输入列对齐-->
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" @click="onSubmit" :disabled="disableSubmit">Sign Up</a-button>
        </a-form-item>
    </a-form>
</template>