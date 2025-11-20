<script setup>
import { ref } from 'vue';
import MyHeader from '@/components/global/MyHeader.vue';
import MySider from '@/components/global/MySider.vue'

const props = defineProps(['showHeader', 'showSider']);

const siderFoldStatus = ref('false')

const toggleSiderStatus = () => {
    siderFoldStatus.value = !siderFoldStatus.value;
}
</script>

<template>
    <a-layout-header class="header" v-if="showHeader !== false">
        <MyHeader />
    </a-layout-header>

    <a-layout class="remain">
        <a-layout-sider :width="siderFoldStatus ? '336px' : '80px'" class="sider" v-if="showSider !== false">
            <MySider @toggle-sider-status="toggleSiderStatus">
                <slot name="sider"></slot>
            </MySider>
        </a-layout-sider>

        <a-layout style="background-color: ghostwhite;">
            <slot name="main"></slot>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.header {
    height: 64px;
    padding: 0 24px;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
}

.sider {
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: white;
    border-right: 1px solid #e0e0e0;
}

.remain {
    min-height: calc(100vh - 64px);
    flex-grow: 1;
}
</style>