<script lang="ts" setup>
import { ClassInfo } from '@/types';


const goToDetail = (string : string) => {

}

const fetchClasses = () => {

}

const data: ClassInfo[] = [
    {
       id: "1",
       count: 23, 
    },
    {
        id: "2",
        count: 34,
    },
    {
        id: "3",
        count: 45,
    }
]
</script>

<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta :description="item.count + ' students in this class'">
                    <template #title>
                        <a @click="goToDetail(item.id)">
                            {{ 'Class ' + item.id }}
                        </a>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>