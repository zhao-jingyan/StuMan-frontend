<script lang="ts" setup>
import router from '@/router/router'
import type { UserInfo } from '@/types/index'
import { onMounted } from 'vue'
import { createRouter, useRoute } from 'vue-router';

const route = useRoute();

const classNum : string = route.params.classNum as string;

const goToDetail = (studentId: string) => {
    const newRoute = route.fullPath + '/' + studentId;
    router.push(newRoute);
}

const fetchStudents = (classId : string) => {
    //get students from 
    console.log('fetch students in classId: ' + classId);
}
const mockData: UserInfo[] = [
    {
        id: "12345678",
        name: "Test Name",
        nickname: "Try nick",
        role: "Student",
        password: "",
        class: "1",
    },
    {
        id: "22323232",
        name: "Test Name",
        nickname: "Try nick",
        role: "Student",
        password: "",
        class: "1",
    },
    {
        id: "333456778",
        name: "Test Name",
        nickname: "Try nick",
        role: "Student",
        password: "",
        class: "1",
    },
]

onMounted(() => {
    fetchStudents(classNum);
})
</script>

<template>
    <div style="margin-top: 10%; margin-left: 20%; margin-right: 20%;">
        <a-typography-text>Students in class {{ classNum }} :</a-typography-text>
        <a-list item-layout="horizontal" :data-source="mockData">
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