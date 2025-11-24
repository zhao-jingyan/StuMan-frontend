<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ClassList from '@/components/manage/ClassList.vue';

import { createRouter, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <MainLayout>
        <template #main>
            <RouterView></RouterView>
        </template>
        <template #sider>
            <ClassList />
        </template>
    </MainLayout>
</template>

<style scoped></style>