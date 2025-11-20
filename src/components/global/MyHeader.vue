<script setup>
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { LogoutOutlined } from '@ant-design/icons-vue';

const route = useRoute();

const state = reactive({
    selectedKeys: ['Profile'],
});

watch(
    () => route.path,
    (newPath) => {
        // 假设您的 Profile 路由是 /profile，Manage 路由是 /manage
        if (newPath.includes('/profile')) {
            state.selectedKeys = ['Profile'];
        } else if (newPath.includes('/manage')) {
            state.selectedKeys = ['Manage'];
        } else {
            state.selectedKeys = [];
        }
    },
    // 组件创建时立即执行一次
    { immediate: true }
);
</script>

<template>
    <div class="header-content">
        <!-- logo, pics in real practice-->
        <a class="logo">
            Student System
        </a>
        <!-- menu bar, for router direction-->
        <a-menu v-model:selectedKeys="state.selectedKeys" mode="horizontal" style="border-bottom: none"
            :style="{ lineHeight: '63px' }" theme="light">
            <a-menu-item key="Profile">
                <router-link to="/profile" style="font-weight: 600; font-size: medium;">
                    Profile
                </router-link>
            </a-menu-item>
            <a-menu-item key="Manage">
                <router-link to="/manage" style="font-weight: 600; font-size: medium;">
                    Manage
                </router-link>
            </a-menu-item>
        </a-menu>
        <!-- header left-->
        <div class="header-right">
            <a-input-search v-if="false" enter-button placeholder="search for"></a-input-search>
            <a-button size="medium">
                <div style="display:flex; flex-direction:row; gap:8px; align-items: center;">
                    <LogoutOutlined />
                    <div style="font-weight: 500;">LogOut</div>
                </div>
            </a-button>
            <a-avatar size="medium" src="" style="flex-shrink: 0">
                User
            </a-avatar>
        </div>
    </div>
</template>

<style scoped>
.logo {
    font-weight: 700;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    color: #2366ff;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 48px;
}

.header-right {
    display: flex;
    margin-left: auto;
    gap: 16px
}
</style>