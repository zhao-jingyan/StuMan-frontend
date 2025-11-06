<script lang="ts" setup>
import { userService } from '@/services/userService';
import type { UserInfo } from '@/types';


const userInfo: UserInfo = {
    id: "123456",
    name: "Test Name",
    nickname: "Try nick",
    role: "Student",
    password: "",
    class: "1",
}

const onDelete = () => {
    userService._delete(userInfo.id)
}

</script>

<template>
    <div style="padding-left: 20%; padding-right: 20%; padding-top:10% ;">
        <a-descriptions title="Student Profile" bordered>
            <a-descriptions-item label="ID">{{ userInfo.id }}</a-descriptions-item>
            <a-descriptions-item label="Name">{{ userInfo.name }}</a-descriptions-item>
            <a-descriptions-item label="Nickname">{{ userInfo.nickname }}</a-descriptions-item>
            <a-descriptions-item label="Type">{{ userInfo.role }}</a-descriptions-item>
            <a-descriptions-item label="Class">{{ userInfo.class }}</a-descriptions-item>
        </a-descriptions>
        <div style="text-align: right; margin-top: 2%;">
            <a-button style="margin-right: 1%;">Edit Info</a-button>
            <a-button danger @click="onDelete"> Delete Account</a-button>
        </div>
    </div>
</template>