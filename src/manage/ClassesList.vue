<script lang="ts" setup>
import router from '@/router/router';
import { ClassInfo } from '@/types';


const goToDetail = (string : string) => {
    router.push('/students')
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

const onNewClass = () => {
    
}
</script>

<template>
    <div style="margin-top: 10%; margin-left: 20%; margin-right: 20%;">
        <a-button @class="onNewClass" style="margin-left: 20px; margin-bottom: 10px;"> new class </a-button>
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
    </div>
</template>