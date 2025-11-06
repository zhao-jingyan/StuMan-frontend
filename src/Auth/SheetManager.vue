<script lang="ts" setup>
import { ref } from 'vue';
import LoginSheet from '@/auth/LoginSheet.vue';
import SignSheet from '@/auth/SignUpSheet.vue';
const activeKey = ref('1');

const labelCol = { style: { width: '100px' } };
const wrapperCol = { span: 15 };
</script>

<template>
    <div style="padding-left: 35%; padding-right: 35%; padding-top:10% ;">
        <a-tabs v-model:activeKey="activeKey" size="large" centered :tabBarGutter="50">
            <a-tab-pane key="1" tab="Login">
                <LoginSheet :label-col="labelCol" :wrapperCol="wrapperCol"/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Sign Up">
                <SignSheet :label-col="labelCol" :wrapperCol="wrapperCol"/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>