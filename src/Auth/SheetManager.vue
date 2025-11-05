<script lang="ts" setup>
    import { ref } from 'vue';
    import LoginSheet from '@/auth/LoginSheet.vue';
    import SignSheet from '@/auth/SignUpSheet.vue';
    const activeKey = ref('1');
</script>

<template>
    <div style="padding-left: 40%; padding-right: 40%; padding-top:15% ;">
        <a-tabs v-model:activeKey="activeKey" size="large" centered :tabBarGutter="50">
            <a-tab-pane key="1" tab="Login">
                <LoginSheet/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Sign Up">
                <SignSheet/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>