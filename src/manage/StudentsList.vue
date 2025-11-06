<script lang="ts" setup>
import type { UserInfo } from '@/types/index'

const goToDetail = (string) => {
    console.log("route push: /" + string)
}

const data: UserInfo[] = [
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

</script>

<template>
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
</template>