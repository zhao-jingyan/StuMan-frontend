<script lang="ts" setup>
    import { ref } from 'vue';
    import LoginSheet from './LoginSheet.vue';
    import SignSheet from './SignSheet.vue';
    const activeKey = ref('1');
</script>

<template>
    <div>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Login">
                <LoginSheet/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Sign Up">
                <SignSheet/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>