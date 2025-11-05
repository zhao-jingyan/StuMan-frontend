<script lang="ts" setup>
import type { UserInfo } from '@/types/index'

const props = defineProps<{
    data : UserInfo[];
}>()

const goToDetail = (string)=>{
    console.log("route push: /" + string)
}

</script>

<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta :description="'id:' + item.id" >
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