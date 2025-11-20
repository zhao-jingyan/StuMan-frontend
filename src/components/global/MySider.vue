<template>
    <div class="sider-content">
        <slot />
    </div>
</template>

<style scoped>
.sider-content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px 0;
}
</style>