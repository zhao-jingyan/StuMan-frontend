<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileView from '@/components/profile/ProfileView.vue';
import ClassList from '@/components/manage/ClassList.vue';
</script>

<template>
    <MainLayout>
        <template #main>
                <p style="padding: 50px;">main content</p>
                <p style="padding: 50px;">main content</p>
                <p style="padding: 50px;">main content</p>
                <p style="padding: 50px;">main content</p>
        </template>
        <template #sider>
            <ClassList />
        </template>
    </MainLayout>
</template>

<style scoped></style>