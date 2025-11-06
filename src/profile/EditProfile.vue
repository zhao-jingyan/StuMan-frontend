<script lang="ts" setup>
/* edit 和 signup 大量代码重复，但是如果复用signup代码可能导致维护困难，因此先尝试在signup代码上修改*/
import { UnwrapRef, reactive, computed, ref } from 'vue';
import type { UserInfo } from '@/types/index'
import { userService } from '@/services/userService';
import router from '@/router/router';

/* 实例化info对象，设定为reactive*/
/* antd官网提供的 用法如此，使用unwrapref和reactive，需要再看一下 */
const UserInfo: UnwrapRef<UserInfo> = reactive({
    role: 'Student',
    name: 'abc',
    id: '123',
    password: '',
    nickname: '',
    class: '',
})

const visible = ref<boolean>(false)

const labelCol = { style: { width: '100px' } };

const wrapperCol = { span: 15 };

const onCancel = () => {
    router.push('/profile')
}

const onConfirm = () => {
    userService.editProfile(UserInfo)
    userService.logout()
    router.push('/auth')
}

</script>

<template>
    <div style="padding-left: 35%; padding-right: 35%; padding-top:15% ;">
        <a-form :model="UserInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="Name:">
                <a-typography-text>{{ UserInfo.name }}</a-typography-text>
            </a-form-item>
            <a-form-item label="ID">
                <a-typography-text>{{ UserInfo.id }}</a-typography-text>
            </a-form-item>
            <a-form-item label="Password" required>
                <a-input-password v-model:value="UserInfo.password" v-model:visible="visible" />
            </a-form-item>
            <a-form-item v-if="UserInfo.role == 'Student'" label="Nickname:">
                <a-input v-model:value="UserInfo.nickname" />
            </a-form-item>
            <a-form-item v-if="UserInfo.role == 'Student'" label="Class">
                <a-input v-model:value="UserInfo.class" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 0 }" style="text-align: center;">
                <a-button style=" width: 70%" type="primary" @click="onConfirm">
                    Confirm Edit
                </a-button>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 0 }" style="text-align: center;">
                <a-button style=" width: 70%" @click="onCancel">
                    Cancel
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>