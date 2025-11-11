<script lang="ts" setup>
import router from '@/router/router';
import { dataService } from '@/services/dataService';
import type { UserInfo } from '@/types';
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const onDelete = () => {
    // userService._delete(userInfo.id)
    if (1) {//for teachers, when they delete an account
        router.back();
    }
    else if (1) {//for students, when they delete an account
        router.push('/auth');
    }
}

const onEdit = () => {
    router.push(route.fullPath + '/edit')
}

const data = ref<UserInfo | null>(null);

onMounted(() => {
    if(route.name === 'Profile') {
        //if /profile, then fetch from localstorage
        data.value = dataService.fetchProfile('mock');
    }
    else{
        const id: string = route.params.studentId as string;//for teacher
        data.value = dataService.fetchProfile(id);
    }
})

const hasStudent = computed(() => !!data.value)
</script>

<template>
    <div style="padding-left: 20%; padding-right: 20%; padding-top:10% ;">
        <div v-if="hasStudent">
            <a-descriptions title="Student Profile" bordered>
                <a-descriptions-item label="ID">{{ data.id }}</a-descriptions-item>
                <a-descriptions-item label="Name">{{ data.name }}</a-descriptions-item>
                <a-descriptions-item label="Nickname">{{ data.nickname }}</a-descriptions-item>
                <a-descriptions-item label="Type">{{ data.role }}</a-descriptions-item>
                <a-descriptions-item label="Class">{{ data.class }}</a-descriptions-item>
            </a-descriptions>
            <div style="text-align: right; margin-top: 2%;">
                <a-button style="margin-right: 1%" @click="onEdit">Edit Info</a-button>
                <a-button danger @click="onDelete"> Delete Account</a-button>
            </div>
        </div>
        <a-empty v-else description="暂无学生信息" />
    </div>
</template>