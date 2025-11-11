<script lang="ts" setup>
/* edit 和 signup 大量代码重复，但是如果复用signup代码可能导致维护困难，因此先尝试在signup代码上修改*/
import { UnwrapRef, reactive, computed, ref, onMounted } from 'vue';
import type { UserInfo } from '@/types/index'
import { userService } from '@/services/userService';
import router from '@/router/router';
import { dataService } from '@/services/dataService';
import { useRoute } from 'vue-router';


/* 实例化info对象，设定为reactive*/
/* antd官网提供的 用法如此，使用unwrapref和reactive，需要再看一下 */

const visible = ref<boolean>(false)

const labelCol = { style: { width: '100px' } };

const wrapperCol = { span: 15 };

const route = useRoute();

const onCancel = () => {
    router.back();
}

const onConfirm = () => {
    userService.editProfile(data.value)
    if (1) {//for teachers
        router.back();
    }
    else if (1) {//for students
        userService.logout();
        router.push('/auth');
    }
}

const data = ref<UserInfo | null>(null);

onMounted(() => {
    if(route.name==='EditProfile') {
        data.value = dataService.fetchProfile("from localstorage");
    }
    else {
        const id : string = route.params.studentId as string;//for teacher, localstorage.id for student
        data.value = dataService.fetchProfile(id)
    }
})

const hasStudent = computed(() => !!data.value)
</script>

<template>
    <div style="padding-left: 35%; padding-right: 35%; padding-top:15% ;">
        <div v-if="hasStudent">
        <a-form :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="Name:">
                <a-typography-text>{{ data.name }}</a-typography-text>
            </a-form-item>
            <a-form-item label="ID">
                <a-typography-text>{{ data.id }}</a-typography-text>
            </a-form-item>
            <a-form-item label="Password" required>
                <a-input-password v-model:value="data.password" v-model:visible="visible" />
            </a-form-item>
            <a-form-item v-if="data.role == 'Student'" label="Nickname:">
                <a-input v-model:value="data.nickname" />
            </a-form-item>
            <a-form-item v-if="data.role == 'Student'" label="Class">
                <a-input v-model:value="data.class" />
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
    </div>
</template>