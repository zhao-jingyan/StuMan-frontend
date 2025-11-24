<script setup>
import { UnorderedListOutlined } from '@ant-design/icons-vue';
import { ref, computed } from 'vue';

const showFullSider = ref(true)

const emit = defineEmits(['toggleSiderStatus'])

const toggleFoldStatus = () => {
    emit('toggleSiderStatus');
    showFullSider.value = !showFullSider.value;
}

const isHover = ref(false);

const onMouseEnter = () => {
    isHover.value = true;
}

const onMouseLeave = () => {
    isHover.value = false;
}

const calcColor = computed(() => {
    return isHover.value ? 'ghostwhite' : 'transparent'
})
</script>

<template>
    <div class="sider-content">
        <div style="padding: 0px 16px">
            <div @click="toggleFoldStatus" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
                style="display: inline-block; border-radius: 36px; padding: 12px 16px; transition: 'background-color 0.2s'; user-select: none; "
                :style="{ backgroundColor: calcColor, cursor: 'pointer' }">
                <UnorderedListOutlined style="font-size: medium;" />
            </div>
            <Transition>
                <div v-if="showFullSider === true">
                    <slot></slot>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.sider-content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px 0;
}

.v-enter-from {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 0.2s ease 0.2s;
}
</style>