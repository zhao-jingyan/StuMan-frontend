<script lang="ts" setup>
import router from '@/router/router';
import { dataService } from '@/services/dataService';
import { userService } from '@/services/userService';
import { ClassInfo } from '@/types';
import { onMounted, ref } from 'vue';

const goToDetail = (classId : string) => {
    router.push('/classes/' + classId + '/students')
}

const onNewClass = () => {
    userService.newClass();
}

const data = ref<ClassInfo[]>([]);

onMounted(() => {
    const id: string = "teacherid";//from localstorage
    data.value = dataService.fetchClasses(id);
})
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