<script lang="ts" setup>
import router from '@/router/router';
import { userService } from '@/services/userService';
import type { UserInfo } from '@/types';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const fetchData = () => {
    if(route.fullPath === '/profile') {
        //fetch by localstorage
    }
    else {
        // fetch by route.params.studentId
    }
}

const mockData: UserInfo = {
    id: "123456",
    name: "Test Name",
    nickname: "Try nick",
    role: "Student",
    password: "",
    class: "1",
}

const onDelete = () => {
    // userService._delete(userInfo.id)
    if(1) {//for teachers, when they delete an account
        router.back();
    }
    else if(1){//for students, when they delete an account
        router.push('/auth');
    }
}

const onEdit = () => {
    router.push(route.fullPath + '/edit')
}

onMounted(()=>{
    fetchData();
})
</script>

<template>
    <div style="padding-left: 20%; padding-right: 20%; padding-top:10% ;">
        <a-descriptions title="Student Profile" bordered>
            <a-descriptions-item label="ID">{{ mockData.id }}</a-descriptions-item>
            <a-descriptions-item label="Name">{{ mockData.name }}</a-descriptions-item>
            <a-descriptions-item label="Nickname">{{ mockData.nickname }}</a-descriptions-item>
            <a-descriptions-item label="Type">{{ mockData.role }}</a-descriptions-item>
            <a-descriptions-item label="Class">{{ mockData.class }}</a-descriptions-item>
        </a-descriptions>
        <div style="text-align: right; margin-top: 2%;">
            <a-button style="margin-right: 1%" @click="onEdit">Edit Info</a-button>
            <a-button danger @click="onDelete"> Delete Account</a-button>
        </div>
    </div>
</template>