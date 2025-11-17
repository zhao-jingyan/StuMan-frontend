<script setup>
import MyHeader from '@/components/MyHeader.vue';
import MySider from '@/components/MySider.vue'

const props = defineProps(['showHeader','showSider']);


</script>

<template>
    <a-layout-header class="header" v-if="showHeader !== false">
        <MyHeader />
    </a-layout-header>
    <a-layout>
        <a-layout-sider width=336 class="sider" v-if="showSider !== false">
            <MySider />
        </a-layout-sider>
        <a-layout style="background-color: ghostwhite;">
            <slot />
        </a-layout>
    </a-layout>
</template>

<style scoped>
.header {
    height: 64px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
}
.sider {
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: white;
    border-right: 1px solid #e0e0e0;;
}

</style>