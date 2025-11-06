<script lang="ts" setup>
import ProfileSheet from '@/manage/ProfileSheet.vue'
import { userService } from '@/services/userService';
import type { UserInfo } from '@/types';


const info: UserInfo = {
    id: "123456",
    name: "Test Name",
    nickname: "Try nick",
    role: "Student",
    password: "",
    class: "1",
}

const onDelete = () => {
    userService._delete(info.id)
}

</script>

<template>
    <div style="padding-left: 20%; padding-right: 20%; padding-top:10% ;">
        <ProfileSheet :user-info="info" />
        <div style="text-align: right; margin-top: 2%;">
            <a-button style="margin-right: 1%;">Edit Info</a-button>
            <a-button danger @click="onDelete"> Delete Account</a-button>
        </div>
    </div>
</template>