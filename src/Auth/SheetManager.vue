<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import LoginSheet from '@/auth/LoginSheet.vue';
import SignSheet from '@/auth/SignUpSheet.vue';
import router from '@/router/router';
import { useRoute } from 'vue-router';
const activeKey = ref('login');

const labelCol = { style: { width: '100px' } };
const wrapperCol = { span: 15 };

const route = useRoute()

</script>

<template>
    <div style="padding-left: 35%; padding-right: 35%; padding-top:10% ;">
        <a-tabs v-model:activeKey="activeKey" size="large" centered :tabBarGutter="50">
            <a-tab-pane key="login" tab="Login">
                <LoginSheet :label-col="labelCol" :wrapperCol="wrapperCol"/>
            </a-tab-pane>
            <a-tab-pane key="signup" tab="Sign Up">
                <SignSheet :label-col="labelCol" :wrapperCol="wrapperCol"/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>