<script setup>
import { reactive } from 'vue'
import { LogoutOutlined } from '@ant-design/icons-vue';

const state = reactive({
    selectedKeys: ['profile'],
});
</script>

<template>
    <div style="display: flex; align-items: center;">
        <a class="logo">
            Student System
        </a>
        <a-menu v-model:selectedKeys="state.selectedKeys" mode="horizontal" style="padding-left: 128px; border-bottom: none"
            :style="{ lineHeight: '63px' }" theme="light">
            <a-menu-item key="Profile">
                <a style="font-weight: 600; font-size: medium;"> Profile</a>
            </a-menu-item>
            <a-menu-item key="Manage">
                <a style="font-weight: 600; font-size: medium;"> Manage </a>
            </a-menu-item>
        </a-menu>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between; padding-right: 24px;">
        <div style="padding-right: 12px;">
            <a-button size="medium">
                <LogoutOutlined style="padding-right: 7px;" />
                <a style="font-weight: 500;">LogOut</a>
            </a-button>
        </div>
        <a-avatar size="medium" src="">
            User
        </a-avatar>
    </div>
</template>

<style scoped>
.logo {
    font-weight: 700;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2366FF;
    padding-left: 24px;
    margin: 0
}
</style>