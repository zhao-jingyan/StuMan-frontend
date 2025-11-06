<script lang="ts" setup>
import { UnwrapRef, reactive } from 'vue';
import type { UserInfo } from '@/types/index'

const props = defineProps<{
    userInfo: UserInfo;
}>()

</script>

<template>
    <a-descriptions title="Student Profile" bordered>
        <a-descriptions-item label="ID">{{ userInfo.id }}</a-descriptions-item>
        <a-descriptions-item label="Name">{{ userInfo.name }}</a-descriptions-item>
        <a-descriptions-item label="Nickname">{{ userInfo.nickname }}</a-descriptions-item>
        <a-descriptions-item label="Type">{{ userInfo.role }}</a-descriptions-item>
        <a-descriptions-item label="Class">{{ userInfo.class }}</a-descriptions-item>
    </a-descriptions>
</template>