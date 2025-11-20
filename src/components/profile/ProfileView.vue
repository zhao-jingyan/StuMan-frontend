<script lang="ts" setup>
import router from '@/router/router';
import { dataService } from '@/services/dataService';
import type { UserInfo } from '@/types';
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const onDelete = () => {
    // userService._delete(userInfo.id)
    if (1) {//for teachers, when they delete an account
        router.back();
    }
    else if (1) {//for students, when they delete an account
        router.push('/auth');
    }
}

const onEdit = () => {
    router.push(route.fullPath + '/edit')
}

const data = ref<UserInfo | null>(null);

onMounted(() => {
    if(route.name === 'Profile') {
        //if /profile, then fetch from localstorage
        data.value = dataService.fetchProfile('mock');
    }
    else{
        const id: string = route.params.studentId as string;//for teacher
        data.value = dataService.fetchProfile(id);
    }
})

const hasStudent = computed(() => !!data.value)
</script>

<template>

</template>