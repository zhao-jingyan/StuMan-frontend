<script lang="ts" setup>
import router from '@/router/router'
import type { UserInfo } from '@/types/index'
import { ref, onMounted, computed } from 'vue'
import { createRouter, useRoute } from 'vue-router';
import { dataService } from '@/services/dataService';

const route = useRoute();

const classNum: string = route.params.classNum as string;

const goToDetail = (studentId: string) => {
    const newRoute = route.fullPath + '/' + studentId;
    router.push(newRoute);
}

const data = ref<UserInfo[]>([]);

onMounted(() => {
    data.value = dataService.fetchStudents(classNum);
})

/* hover */
const hoverClass = ref(null);

const onMouseEnter = (itemId) => {
    hoverClass.value = itemId;
}

const onMouseLeave = () => {
    hoverClass.value = null;
}

const calcBackColor = (ID) => {
    return ID === hoverClass.value ? 'ghostwhite' : 'transparent'
}
/* hover end */
</script>

<template>
    <div style="padding: 72px 128px">
        <a-list item-layout="horizontal" style="border-radius:16px; 
                        background-color: white; 
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                        overflow: hidden;" :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item @mouseenter="onMouseEnter(item.id)" @mouseleave="onMouseLeave"
                    style="padding: 16px 32px"
                    :style="{ backgroundColor: calcBackColor(item.id) }">
                    <div style="display: flex; flex-direction: row; align-items: center; width: 100%; gap:24px">
                        <a-avatar>
                            User
                        </a-avatar>
                        <div style="font-size:medium;">
                            {{ item.name }}
                        </div>
                        <div style="font-size: small; color: gray;">
                            ID: {{ item.id }}
                        </div>
                    </div>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>