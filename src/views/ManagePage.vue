<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileView from '@/components/profile/ProfileView.vue';
import ClassList from '@/components/manage/ClassList.vue';
import StudentList from '@/components/manage/StudentList.vue';
</script>

<template>
    <MainLayout>
        <template #main>
            <StudentList />
        </template>
        <template #sider>
            <ClassList />
        </template>
    </MainLayout>
</template>

<style scoped></style>