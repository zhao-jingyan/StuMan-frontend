<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileCard from '@/components/profile/ProfileCard.vue';

import { createRouter, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <MainLayout :show-sider="false">
        <template #main>
            <ProfileCard></ProfileCard>
        </template>
    </MainLayout>
</template>