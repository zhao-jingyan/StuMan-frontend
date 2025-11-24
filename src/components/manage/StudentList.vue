<script lang="ts" setup>
import router from '@/router/router'
import type { UserInfo } from '@/types/index'
import { ref, onMounted, computed } from 'vue'
import { createRouter, useRoute } from 'vue-router';
import { dataService } from '@/services/dataService';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { userService } from '@/services/userService';

const route = useRoute();

const classNum: string = route.params.classNum as string;

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

const onClickEdit = (studentid) => {
    const newRoute = route.fullPath + '/student/' + studentid;
    router.push(newRoute);
}

const onClickDelete = (studentId, studentName) => {
    let choice = confirm("Student " + studentName + "(id:" + studentId + ") will be removed from your class.");
    if(choice) {
        userService.deleteStudent(studentId);
    }
}
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 64px 128px;">

        <div style="display: flex; flex-direction: row; text-align: center; padding: 0px 16px;">
            <h1 style="font-size: x-large;">Class {{ route.params.classid }}</h1>
            <div style="margin-left: auto;">
                <a-button danger>delete class</a-button>
            </div>
        </div>

        <a-list item-layout="horizontal" style="border-radius:16px; 
                        background-color: white; 
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                        overflow: hidden;" :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item @mouseenter="onMouseEnter(item.id)" @mouseleave="onMouseLeave" style="padding: 16px 32px"
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

                        <div v-if="hoverClass === item.id"
                            style="display: flex; flex-direction: row; text-align: center; margin-left: auto; gap: 8px;">
                            <a-button type="text" @click="onClickEdit(item.id)" style="border-radius: 24px;">
                                <EditOutlined />
                            </a-button>
                            <a-button type="text"  danger @click="onClickDelete(item.id, item.name)" style="border-radius: 24px;">
                                <DeleteOutlined />
                            </a-button>
                        </div>

                    </div>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>