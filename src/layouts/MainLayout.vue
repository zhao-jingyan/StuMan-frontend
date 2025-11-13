<script setup>
import { computed } from 'vue';
import MyHeader from '@/components/MyHeader.vue';

const props = defineProps(['showHeader']);

const mainStyle = computed(() => ({
    paddingTop: props.showHeader !== false ? '120px' : '0'
}));
</script>

<template>
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
        <MyHeader v-if="showHeader !== false" />
        <main style="flex: 1; background-color: ghostwhite; padding-top: 110px;">
            <slot />
        </main>
    </div>
</template>
