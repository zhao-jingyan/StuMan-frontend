<script lang="ts" setup>
import router from '@/router/router'
import type { UserInfo } from '@/types/index'
import { ref, onMounted } from 'vue'
import { createRouter, useRoute } from 'vue-router';
import { dataService } from '@/services/dataService';

const route = useRoute();

const classNum : string = route.params.classNum as string;

const goToDetail = (studentId: string) => {
    const newRoute = route.fullPath + '/' + studentId;
    router.push(newRoute);
}

const data = ref<UserInfo[]>([]);

onMounted(() => {
    data.value = dataService.fetchStudents(classNum);
})
</script>

<template>
    <div style="margin-top: 10%; margin-left: 20%; margin-right: 20%;">
        <a-typography-text>Students in class {{ classNum }} :</a-typography-text>
        <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="'id:' + item.id">
                        <template #title>
                            <a @click="goToDetail(item.id)">
                                {{ item.name }}
                            </a>
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>